import React, { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Text,
  Flex,
  HelpIcon,
  Button,
  Heading,
  Skeleton,
  useModal,
  Box,
  useTooltip,
} from '@javaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceJavaUsdc } from 'state/farms/hooks'
import { useJavaVault } from 'state/pools/hooks'
import Balance from 'components/Balance'
import BountyModal from './BountyModal'

const StyledCard = styled(Card)`
  width: 100%;
  flex: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 240px;
  }
`

const BountyCard = () => {
  const { t } = useTranslation()
  const {
    estimatedJavaBountyReward,
    fees: { callFee },
  } = useJavaVault()
  const javaPriceUsdc = usePriceJavaUsdc()

  const estimatedDollarBountyReward = useMemo(() => {
    return new BigNumber(estimatedJavaBountyReward).multipliedBy(javaPriceUsdc)
  }, [javaPriceUsdc, estimatedJavaBountyReward])

  const hasFetchedDollarBounty = estimatedDollarBountyReward.gte(0)
  const hasFetchedJavaBounty = estimatedJavaBountyReward ? estimatedJavaBountyReward.gte(0) : false
  const dollarBountyToDisplay = hasFetchedDollarBounty ? getBalanceNumber(estimatedDollarBountyReward, 18) : 0
  const javaBountyToDisplay = hasFetchedJavaBounty ? getBalanceNumber(estimatedJavaBountyReward, 18) : 0

  const TooltipComponent = ({ fee }: { fee: number }) => (
    <>
      <Text mb="16px">{t('This bounty is given as a reward for providing a service to other users.')}</Text>
      <Text mb="16px">
        {t(
          'Whenever you successfully claim the bounty, you’re also helping out by activating the Auto JAVA Pool’s compounding function for everyone.',
        )}
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
        {t('Auto-Compound Bounty: %fee%% of all Auto JAVA pool users pending yield', { fee: fee / 100 })}
      </Text>
    </>
  )

  const [onPresentBountyModal] = useModal(<BountyModal TooltipComponent={TooltipComponent} />)

  const { targetRef, tooltip, tooltipVisible } = useTooltip(<TooltipComponent fee={callFee} />, {
    placement: 'bottom-end',
    tooltipOffset: [20, 10],
  })

  return (
    <>
      {tooltipVisible && tooltip}
      <StyledCard>
        <CardBody>
          <Flex flexDirection="column">
            <Flex alignItems="center" mb="12px">
              <Text fontSize="16px" bold color="textSubtle" mr="4px">
                {t('Auto JAVA Bounty')}
              </Text>
              <Box ref={targetRef}>
                <HelpIcon color="textSubtle" />
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex flexDirection="column" mr="12px">
              <Heading>
                {hasFetchedJavaBounty ? (
                  <Balance fontSize="20px" bold value={javaBountyToDisplay} decimals={3} />
                ) : (
                  <Skeleton height={20} width={96} mb="2px" />
                )}
              </Heading>
              {hasFetchedDollarBounty ? (
                <Balance
                  fontSize="12px"
                  color="textSubtle"
                  value={dollarBountyToDisplay}
                  decimals={2}
                  unit=" USD"
                  prefix="~"
                />
              ) : (
                <Skeleton height={16} width={62} />
              )}
            </Flex>
            <Button
              disabled={!dollarBountyToDisplay || !javaBountyToDisplay || !callFee}
              onClick={onPresentBountyModal}
              scale="sm"
              id="clickClaimVaultBounty"
            >
              {t('Claim')}
            </Button>
          </Flex>
        </CardBody>
      </StyledCard>
    </>
  )
}

export default BountyCard
