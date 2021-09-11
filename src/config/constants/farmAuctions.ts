import { Token, Pair, ChainId } from '@javaswap/sdk'
import tokens from './tokens'
import { FarmAuctionBidderConfig } from './types'

const getLpAddress = (tokenAddress: string, quoteToken: Token) => {
  const token = new Token(ChainId.MAINNET, tokenAddress, 18)
  return Pair.getAddress(token, quoteToken)
}

export const whitelistedBidders: FarmAuctionBidderConfig[] = [
 ,
].map((bidderConfig) => ({
  ...bidderConfig,
  lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
}))

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: tokens.wmatic,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}
