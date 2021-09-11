import { ChainId, Token } from '@javaswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wmatic: new Token(
    MAINNET,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped MATIC',
    'https://www.binance.com/',
  ),
  // matic here points to the wmatic contract. Wherever the currency MATIC is required, conditional checks for the symbol 'MATIC' can be used
  matic: new Token(MAINNET, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'MATIC', 'MATIC', 'https://www.binance.com/'),
  java: new Token(
    MAINNET,
    '0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5',
    18,
    'JAVA',
    'JavaSwap Token',
    'https://javaswap.io/',
  ),
  usdc: new Token(
    MAINNET,
    '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    6,
    'USDC',
    'USDC Coin',
    'https://www.circle.com/en/usdc',
  ),
  espresso: new Token(
    MAINNET,
    '0x3FDF1055d9968e12AD386C284d8a8612823f0DB2',
    18,
    'ESPRESSO',
    'Espresso Token',
    'https://javaswap.io/',
  ),
}

export const testnetTokens = {
  wmatic: new Token(
    TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WMATIC',
    'Wrapped MATIC',
    'https://www.binance.com/',
  ),
  java: new Token(
    TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'JAVA',
    'JavaSwap Token',
    'https://javaswap.io/',
  ),
  usdc: new Token(
    TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    6,
    'USDC',
    'Binance USD',
    'https://www.paxos.com/usdc/',
  ),
  espresso: new Token(
    TESTNET,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'ESPRESSO',
    'Espresso Token',
    'https://javaswap.io/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
