import React from 'react'
import { Flex, Text } from '@javaswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePriceJavaBusd } from 'state/farms/hooks'
import { useJavaVault } from 'state/pools/hooks'
import { getJavaVaultEarnings } from 'views/Pools/helpers'
import RecentJavaProfitBalance from './RecentJavaProfitBalance'

const RecentJavaProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { javaAtLastUserAction, userShares, lastUserActionTime },
  } = useJavaVault()
  const javaPriceBusd = usePriceJavaBusd()
  const { hasAutoEarnings, autoJavaToDisplay, autoUsdToDisplay } = getJavaVaultEarnings(
    account,
    javaAtLastUserAction,
    userShares,
    pricePerFullShare,
    javaPriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent JAVA profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentJavaProfitBalance
          javaToDisplay={autoJavaToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentJavaProfitCountdownRow
