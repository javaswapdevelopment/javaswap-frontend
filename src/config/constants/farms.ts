import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'JAVA',
    lpAddresses: {
      80001: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      137: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: serializedTokens.espresso,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 251,
    lpSymbol: 'JAVA-MATIC LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.java,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wmatic,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 389,
    lpSymbol: 'JAVA-BUSD LP',
    lpAddresses: {
      80001: '',
      137: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: serializedTokens.java,
    quoteToken: serializedTokens.busd,
  },
]

export default farms
