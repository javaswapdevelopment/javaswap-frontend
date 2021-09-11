import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'JAVA',
    lpAddresses: {
      80001: '',
      137: '0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5',
    },
    token: serializedTokens.espresso,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'JAVA-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x0fAac21ed12f95317Afd43Ba1ef281dcdBaFa22B',
    },
    token: serializedTokens.java,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 3,
    lpSymbol: 'USDC-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x6471155E47D2C86e9808A6BEBe203960f5e32584',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wmatic,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 1,
    lpSymbol: 'JAVA-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x51C8F864480F44Db0035bb7D5F715184c12d00f0',
    },
    token: serializedTokens.java,
    quoteToken: serializedTokens.usdc,
  },
]

export default farms
