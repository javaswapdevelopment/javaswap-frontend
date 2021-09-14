import React from 'react'
import { Card, CardBody, Skeleton, Text } from '@javaswap/uikit'
import styled from 'styled-components'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useReferrals from 'hooks/useReferral'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'

const StyledReferralCard = styled(Card)`
  text-align: center;
`

const StyledButton = styled(ConnectWalletButton)`
  width: 300px;
`

const ReferralCard = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const referrals = useReferrals()


  return (
    <StyledReferralCard>

      <CardBody>
        {
          account
            ?
            <>
              <h1 style={{ fontSize: 24, marginBottom: 32 }}>{t('Your Referral Link')}</h1>
              <p>https://javaswap.io/?ref={account}</p>
              <h1 style={{ fontSize: 24, marginTop: 32, marginBottom: 16 }}>{t('Total Referrals')}</h1>
              {!referrals?(<Skeleton />):<p>{referrals.toString()}</p>}
            </>
            :
            <>
              <Text bold color="primary" fontSize="30px">
                {t('Share the referral link below to invite your friends and <br /> earn 2% of your friends earning FOREVER!')}
              </Text>
              <br />
              <StyledButton />
              <br /><br />
              <Text fontSize="15px">{t('Your will automatically get $JAVA in your wallet as reward whenever the referred user Harvests/Withdraws our Farms and Pools..')}</Text>
            </>
        }
      </CardBody>
    </StyledReferralCard>
  )
}

export default ReferralCard