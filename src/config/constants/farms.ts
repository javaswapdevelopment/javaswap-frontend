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
      137: '0x70EA737A313451BB71E2880dB2cb442dEe9A7F1E',
    },
    token: serializedTokens.java,
    quoteToken: serializedTokens.wmatic,
  },
  {
    pid: 3,
    lpSymbol: 'USDC-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0xEf45E5814cC503fD3691DCd9128F4200D4e46D02',
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
      137: '0x09E604a75583eBa6c678D5CFf354b41efE28D511',
    },
    token: serializedTokens.java,
    quoteToken: serializedTokens.usdc,
  },
]

export default farms
