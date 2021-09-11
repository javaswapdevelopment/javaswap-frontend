import { ContextApi } from 'contexts/Localization/types'
import BigNumber from 'bignumber.js'

export const getEarningsText = (
  numFarmsToCollect: number,
  hasJavaPoolToCollect: boolean,
  earningsUsdc: BigNumber,
  t: ContextApi['t'],
): string => {
  const data = {
    earningsUsdc: earningsUsdc.toString(),
    count: numFarmsToCollect,
  }

  let earningsText = t('%earningsUsdc% to collect', data)

  if (numFarmsToCollect > 0 && hasJavaPoolToCollect) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdc% to collect from %count% farms and JAVA pool', data)
    } else {
      earningsText = t('%earningsUsdc% to collect from %count% farm and JAVA pool', data)
    }
  } else if (numFarmsToCollect > 0) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdc% to collect from %count% farms', data)
    } else {
      earningsText = t('%earningsUsdc% to collect from %count% farm', data)
    }
  } else if (hasJavaPoolToCollect) {
    earningsText = t('%earningsUsdc% to collect from JAVA pool', data)
  }

  return earningsText
}
