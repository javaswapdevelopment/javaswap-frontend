// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
import tokens from 'config/constants/tokens'

const getLiquidityUrlPathParts = ({
  quoteTokenAddress,
  tokenAddress,
}: {
  quoteTokenAddress: string
  tokenAddress: string
}): string => {
  const wMaticAddress = tokens.wmatic.address
  const firstPart = !quoteTokenAddress || quoteTokenAddress === wMaticAddress ? 'MATIC' : quoteTokenAddress
  const secondPart = !tokenAddress || tokenAddress === wMaticAddress ? 'MATIC' : tokenAddress
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
