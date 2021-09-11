import { useEffect, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { simpleRpcProvider } from 'utils/providers'
import useRefresh from 'hooks/useRefresh'
import {
  fetchPoolsPublicDataAsync,
  fetchPoolsUserDataAsync,
  fetchJavaVaultPublicData,
  fetchJavaVaultUserData,
  fetchJavaVaultFees,
  fetchPoolsStakingLimitsAsync,
} from '.'
import { State, DeserializedPool } from '../types'
import { transformPool } from './helpers'

export const useFetchPublicPoolsData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchPoolsPublicData = async () => {
      const blockNumber = await simpleRpcProvider.getBlockNumber()
      dispatch(fetchPoolsPublicDataAsync(blockNumber))
    }

    fetchPoolsPublicData()
    dispatch(fetchPoolsStakingLimitsAsync())
  }, [dispatch, slowRefresh])
}

export const useFetchUserPools = (account) => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])
}

export const usePools = (): { pools: DeserializedPool[]; userDataLoaded: boolean } => {
  const { pools, userDataLoaded } = useSelector((state: State) => ({
    pools: state.pools.data,
    userDataLoaded: state.pools.userDataLoaded,
  }))
  return { pools: pools.map(transformPool), userDataLoaded }
}

export const useFetchJavaVault = () => {
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchJavaVaultPublicData())
  }, [dispatch, fastRefresh])

  useEffect(() => {
    dispatch(fetchJavaVaultUserData({ account }))
  }, [dispatch, fastRefresh, account])

  useEffect(() => {
    dispatch(fetchJavaVaultFees())
  }, [dispatch])
}

export const useJavaVault = () => {
  const {
    totalShares: totalSharesAsString,
    pricePerFullShare: pricePerFullShareAsString,
    totalJavaInVault: totalJavaInVaultAsString,
    estimatedJavaBountyReward: estimatedJavaBountyRewardAsString,
    totalPendingJavaHarvest: totalPendingJavaHarvestAsString,
    fees: { performanceFee, callFee, withdrawalFee, withdrawalFeePeriod },
    userData: {
      isLoading,
      userShares: userSharesAsString,
      javaAtLastUserAction: javaAtLastUserActionAsString,
      lastDepositedTime,
      lastUserActionTime,
    },
  } = useSelector((state: State) => state.pools.javaVault)

  const estimatedJavaBountyReward = useMemo(() => {
    return new BigNumber(estimatedJavaBountyRewardAsString)
  }, [estimatedJavaBountyRewardAsString])

  const totalPendingJavaHarvest = useMemo(() => {
    return new BigNumber(totalPendingJavaHarvestAsString)
  }, [totalPendingJavaHarvestAsString])

  const totalShares = useMemo(() => {
    return new BigNumber(totalSharesAsString)
  }, [totalSharesAsString])

  const pricePerFullShare = useMemo(() => {
    return new BigNumber(pricePerFullShareAsString)
  }, [pricePerFullShareAsString])

  const totalJavaInVault = useMemo(() => {
    return new BigNumber(totalJavaInVaultAsString)
  }, [totalJavaInVaultAsString])

  const userShares = useMemo(() => {
    return new BigNumber(userSharesAsString)
  }, [userSharesAsString])

  const javaAtLastUserAction = useMemo(() => {
    return new BigNumber(javaAtLastUserActionAsString)
  }, [javaAtLastUserActionAsString])

  return {
    totalShares,
    pricePerFullShare,
    totalJavaInVault,
    estimatedJavaBountyReward,
    totalPendingJavaHarvest,
    fees: {
      performanceFee,
      callFee,
      withdrawalFee,
      withdrawalFeePeriod,
    },
    userData: {
      isLoading,
      userShares,
      javaAtLastUserAction,
      lastDepositedTime,
      lastUserActionTime,
    },
  }
}
