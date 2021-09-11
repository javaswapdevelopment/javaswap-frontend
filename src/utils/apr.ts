import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, JAVA_PER_YEAR } from 'config'
import lpAprs from 'config/constants/lpAprs.json'

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new java allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param javaPriceUsd Java price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
export const getFarmApr = (
  poolWeight: BigNumber,
  javaPriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
): { javaRewardsApr: number; lpRewardsApr: number } => {
  const yearlyJavaRewardAllocation = JAVA_PER_YEAR.times(poolWeight)
  const javaRewardsApr = yearlyJavaRewardAllocation.times(javaPriceUsd).div(poolLiquidityUsd).times(100)
  let javaRewardsAprAsNumber = null
  if (!javaRewardsApr.isNaN() && javaRewardsApr.isFinite()) {
    javaRewardsAprAsNumber = javaRewardsApr.toNumber()
  }
  const lpRewardsApr = lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return { javaRewardsApr: javaRewardsAprAsNumber, lpRewardsApr }
}

export default null
