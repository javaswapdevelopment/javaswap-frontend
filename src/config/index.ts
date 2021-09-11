import { ChainId } from '@javaswap/sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const POLYGON_BLOCK_TIME = 2

export const BASE_POLYGON_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://polygonscan.com',
  [ChainId.TESTNET]: 'https://testnet.polygonscan.com',
}

// JAVA_PER_BLOCK details
// 40 JAVA is minted per block
// 20 JAVA per block is sent to Burn pool (A farm just for burning java)
// 10 JAVA per block goes to JAVA espresso pool
// 9 JAVA per block goes to Yield farms and lottery
// JAVA_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// JAVA/Block in src/views/Home/components/JavaDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const JAVA_PER_BLOCK = new BigNumber(40)
export const BLOCKS_PER_YEAR = new BigNumber((60 / POLYGON_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const JAVA_PER_YEAR = JAVA_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BASE_URL = 'https://javaswap.io'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_URL}/pool`
export const BASE_BSC_SCAN_URL = BASE_POLYGON_SCAN_URLS[ChainId.MAINNET]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
