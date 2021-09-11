import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { Flex, Text } from '@javaswap/uikit'
import styled from 'styled-components'
import { BIG_ZERO } from 'utils/bigNumber'
import { useTranslation } from 'contexts/Localization'
import { LotteryRound } from 'state/types'
import RewardBracketDetail from './RewardBracketDetail'

const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
`

const RewardsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(4, 1fr);
  }
`

interface RewardMatchesProps {
  lotteryNodeData: LotteryRound
  isHistoricRound?: boolean
}

interface RewardsState {
  isLoading: boolean
  javaToBurn: BigNumber
  rewardsLessTreasuryFee: BigNumber
  rewardsBreakdown: string[]
  countWinnersPerBracket: string[]
}

const RewardBrackets: React.FC<RewardMatchesProps> = ({ lotteryNodeData, isHistoricRound }) => {
  const { t } = useTranslation()
  const [state, setState] = useState<RewardsState>({
    isLoading: true,
    javaToBurn: BIG_ZERO,
    rewardsLessTreasuryFee: BIG_ZERO,
    rewardsBreakdown: null,
    countWinnersPerBracket: null,
  })

  useEffect(() => {
    if (lotteryNodeData) {
      const { treasuryFee, amountCollectedInJava, rewardsBreakdown, countWinnersPerBracket } = lotteryNodeData

      const feeAsPercentage = new BigNumber(treasuryFee).div(100)
      const javaToBurn = feeAsPercentage.div(100).times(new BigNumber(amountCollectedInJava))
      const amountLessTreasuryFee = new BigNumber(amountCollectedInJava).minus(javaToBurn)
      setState({
        isLoading: false,
        javaToBurn,
        rewardsLessTreasuryFee: amountLessTreasuryFee,
        rewardsBreakdown,
        countWinnersPerBracket,
      })
    } else {
      setState({
        isLoading: true,
        javaToBurn: BIG_ZERO,
        rewardsLessTreasuryFee: BIG_ZERO,
        rewardsBreakdown: null,
        countWinnersPerBracket: null,
      })
    }
  }, [lotteryNodeData])

  const getJavaRewards = (bracket: number) => {
    const shareAsPercentage = new BigNumber(state.rewardsBreakdown[bracket]).div(100)
    return state.rewardsLessTreasuryFee.div(100).times(shareAsPercentage)
  }

  const { isLoading, countWinnersPerBracket, javaToBurn } = state

  const rewardBrackets = [0, 1, 2, 3, 4, 5]

  return (
    <Wrapper>
      <Text fontSize="14px" mb="24px">
        {t('Match the winning number in the same order to share prizes.')}{' '}
        {!isHistoricRound && t('Current prizes up for grabs:')}
      </Text>
      <RewardsInner>
        {rewardBrackets.map((bracketIndex) => (
          <RewardBracketDetail
            key={bracketIndex}
            rewardBracket={bracketIndex}
            javaAmount={!isLoading && getJavaRewards(bracketIndex)}
            numberWinners={!isLoading && countWinnersPerBracket[bracketIndex]}
            isHistoricRound={isHistoricRound}
            isLoading={isLoading}
          />
        ))}
        <RewardBracketDetail rewardBracket={0} javaAmount={javaToBurn} isBurn isLoading={isLoading} />
      </RewardsInner>
    </Wrapper>
  )
}

export default RewardBrackets
