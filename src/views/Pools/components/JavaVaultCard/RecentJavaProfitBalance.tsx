import React from 'react'
import { Text, TooltipText, useTooltip } from '@javaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentJavaProfitBalanceProps {
  javaToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentJavaProfitBalance: React.FC<RecentJavaProfitBalanceProps> = ({
  javaToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={javaToDisplay} decimals={3} bold unit=" JAVA" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={javaToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentJavaProfitBalance
