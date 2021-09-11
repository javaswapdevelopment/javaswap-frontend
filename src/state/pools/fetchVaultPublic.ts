import BigNumber from 'bignumber.js'
import { convertSharesToJava } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import javaVaultAbi from 'config/abi/javaVault.json'
import { getJavaVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestJavaRewards',
      'calculateTotalPendingJavaRewards',
    ].map((method) => ({
      address: getJavaVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedJavaBountyReward], [totalPendingJavaHarvest]] = await multicallv2(
      javaVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalJavaInVaultEstimate = convertSharesToJava(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalJavaInVault: totalJavaInVaultEstimate.javaAsBigNumber.toJSON(),
      estimatedJavaBountyReward: new BigNumber(estimatedJavaBountyReward.toString()).toJSON(),
      totalPendingJavaHarvest: new BigNumber(totalPendingJavaHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalJavaInVault: null,
      estimatedJavaBountyReward: null,
      totalPendingJavaHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getJavaVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(javaVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
