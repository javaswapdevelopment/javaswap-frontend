import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utils/multicall'
import { getMasterchefContract } from 'utils/contractHelpers'
import { getAddress } from 'utils/addressHelpers'
import { simpleRpcProvider } from 'utils/providers'
import BigNumber from 'bignumber.js'

// Pool 0, Java / Java is a different kind of contract (master chef)
// MATIC pools use the native MATIC token (wrapping ? unwrapping is done at the contract level)
const nonMaticPools = poolsConfig.filter((pool) => pool.stakingToken.symbol !== 'MATIC')
const maticPools = poolsConfig.filter((pool) => pool.stakingToken.symbol === 'MATIC')
const nonMasterPools = poolsConfig.filter((pool) => pool.sousId !== 0)
const masterBrewContract = getMasterchefContract()

export const fetchPoolsAllowance = async (account) => {
  const calls = nonMaticPools.map((pool) => ({
    address: pool.stakingToken.address,
    name: 'allowance',
    params: [account, getAddress(pool.contractAddress)],
  }))

  const allowances = await multicall(erc20ABI, calls)
  return nonMaticPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserBalances = async (account) => {
  // Non MATIC pools
  const calls = nonMaticPools.map((pool) => ({
    address: pool.stakingToken.address,
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall(erc20ABI, calls)
  const tokenBalances = nonMaticPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )

  // MATIC pools
  const maticBalance = await simpleRpcProvider.getBalance(account)
  const maticBalances = maticPools.reduce(
    (acc, pool) => ({ ...acc, [pool.sousId]: new BigNumber(maticBalance.toString()).toJSON() }),
    {},
  )

  return { ...tokenBalances, ...maticBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'userInfo',
    params: [account],
  }))
  const userInfo = await multicall(sousChefABI, calls)
  const stakedBalances = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {},
  )

  // Java / Java pool
  const { amount: masterPoolAmount } = await masterBrewContract.userInfo('0', account)

  return { ...stakedBalances, 0: new BigNumber(masterPoolAmount.toString()).toJSON() }
}

export const fetchUserPendingRewards = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'pendingReward',
    params: [account],
  }))
  const res = await multicall(sousChefABI, calls)
  const pendingRewards = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {},
  )

  // Java / Java pool
  const pendingReward = await masterBrewContract.pendingJava('0', account)

  return { ...pendingRewards, 0: new BigNumber(pendingReward.toString()).toJSON() }
}
