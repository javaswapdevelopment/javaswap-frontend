import React from 'react'
import styled from 'styled-components'
import every from 'lodash/every'
import { Stepper, Step, StepStatus, Card, CardBody, Heading, Text, Button, Link, OpenNewIcon } from '@javaswap/uikit'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { Ifo } from 'config/constants/types'
import { WalletIfoData } from 'views/Ifos/types'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance from 'hooks/useTokenBalance'
import Container from 'components/Layout/Container'

interface Props {
  ifo: Ifo
  walletIfoData: WalletIfoData
}

const Wrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: -24px;
    margin-right: -24px;
  }
`

const IfoSteps: React.FC<Props> = ({ ifo, walletIfoData }) => {
  const { poolBasic, poolUnlimited } = walletIfoData
  const { t } = useTranslation()
  const { balance } = useTokenBalance(ifo.currency.address)
  const stepsValidationStatus = [
    balance.isGreaterThan(0),
    poolBasic.amountTokenCommittedInLP.isGreaterThan(0) || poolUnlimited.amountTokenCommittedInLP.isGreaterThan(0),
    poolBasic.hasClaimed || poolUnlimited.hasClaimed,
  ]

  const getStatusProp = (index: number): StepStatus => {
    const arePreviousValid = index === 0 ? true : every(stepsValidationStatus.slice(0, index), Boolean)
    if (stepsValidationStatus[index]) {
      return arePreviousValid ? 'past' : 'future'
    }
    return arePreviousValid ? 'current' : 'future'
  }

  const renderCardBody = (step: number) => {
    switch (step) {
      case 0:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Get JAVA-MATIC LP Tokens')}
            </Heading>
            <Text color="textSubtle" small>
              {t('Stake JAVA and MATIC in the liquidity pool to get LP tokens.')} <br />
              {t('You’ll spend them to buy IFO sale tokens.')}
            </Text>
            <Button
              as={Link}
              external
              href={`${BASE_ADD_LIQUIDITY_URL}/MATIC/0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5`}
              endIcon={<OpenNewIcon color="white" />}
              mt="16px"
            >
              {t('Get LP tokens')}
            </Button>
          </CardBody>
        )
      case 1:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Commit LP Tokens')}
            </Heading>
            <Text color="textSubtle" small>
              {t('When the IFO sales are live, you can “commit” your LP tokens to buy the tokens being sold.')} <br />
              {t('We recommend committing to the Basic Sale first, but you can do both if you like.')}
            </Text>
          </CardBody>
        )
      case 2:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Claim your tokens and achievement')}
            </Heading>
            <Text color="textSubtle" small>
              {t(
                'After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent JAVA-MATIC LP tokens will be returned to your wallet.',
              )}
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <Heading as="h2" scale="xl" color="secondary" mb="24px" textAlign="center">
        {t('How to Take Part')}
      </Heading>
      <Stepper>
        {stepsValidationStatus.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index} index={index} status={getStatusProp(index)}>
            <Card>{renderCardBody(index)}</Card>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  )
}

export default IfoSteps
