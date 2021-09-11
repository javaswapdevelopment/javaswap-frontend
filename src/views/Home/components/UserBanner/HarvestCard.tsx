import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { AutoRenewIcon, Button, Card, CardBody, Flex, Skeleton, Text, Link, ArrowForwardIcon } from '@javaswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { usePriceJavaUsdc } from 'state/farms/hooks'
import useToast from 'hooks/useToast'
import { useMasterchef } from 'hooks/useContract'
import { harvestFarm } from 'utils/calls'
import Balance from 'components/Balance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { getEarningsText } from './EarningsText'

const StyledCard = styled(Card)`
  width: 100%;
  height: fit-content;
`

const HarvestCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()

  const masterBrewContract = useMasterchef()
  const javaPriceUsdc = usePriceJavaUsdc()
  const earningsUsdc = new BigNumber(farmEarningsSum).multipliedBy(javaPriceUsdc)
  const numTotalToCollect = farmsWithStakedBalance.length
  const numFarmsToCollect = farmsWithStakedBalance.filter((value) => value.pid !== 0).length
  const hasJavaPoolToCollect = numTotalToCollect - numFarmsToCollect > 0

  const earningsText = getEarningsText(numFarmsToCollect, hasJavaPoolToCollect, earningsUsdc, t)
  const [preText, toCollectText] = earningsText.split(earningsUsdc.toString())

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of farmsWithStakedBalance) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterBrewContract, farmWithBalance.pid)
        toastSuccess(
          `${t('Harvested')}!`,
          t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'JAVA' }),
        )
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [farmsWithStakedBalance, masterBrewContract, toastSuccess, toastError, t])

  return (
    <StyledCard>
      <CardBody>
        <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems="center">
          <Flex flexDirection="column" alignItems={['center', null, null, 'flex-start']}>
            {preText && (
              <Text mb="4px" color="textSubtle">
                {preText}
              </Text>
            )}
            {!earningsUsdc.isNaN() ? (
              <Balance
                decimals={earningsUsdc.gt(0) ? 2 : 0}
                fontSize="24px"
                bold
                prefix={earningsUsdc.gt(0) ? '~$' : '$'}
                lineHeight="1.1"
                value={earningsUsdc.toNumber()}
              />
            ) : (
              <Skeleton width={96} height={24} my="2px" />
            )}
            <Text mb={['16px', null, null, '0']} color="textSubtle">
              {toCollectText}
            </Text>
          </Flex>
          {numTotalToCollect <= 0 ? (
            <Link href="farms">
              <Button width={['100%', null, null, 'auto']} variant="secondary">
                <Text color="primary" bold>
                  {t('Start earning')}
                </Text>
                <ArrowForwardIcon ml="4px" color="primary" />
              </Button>
            </Link>
          ) : (
            <Button
              width={['100%', null, null, 'auto']}
              id="harvest-all"
              isLoading={pendingTx}
              endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
              disabled={pendingTx}
              onClick={harvestAllFarms}
            >
              <Text color="invertedContrast" bold>
                {pendingTx ? t('Harvesting') : t('Harvest all')}
              </Text>
            </Button>
          )}
        </Flex>
      </CardBody>
    </StyledCard>
  )
}

export default HarvestCard
