import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.java,
    earningToken: serializedTokens.java,
    contractAddress: {
      80001: '',
      137: '0xC0C59deDb7C982F051934E23B5DE2e3d52CD7798',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
