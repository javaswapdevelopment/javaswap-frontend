import React from 'react'
import styled from 'styled-components'
import ReferralCard from './components/ReferralCard'

const CenterPage = styled.div`
  text-align: center;

`

const Referrals: React.FC = () => {
  return (
    <CenterPage>
      <img alt="JavaSwap" src="./images/referralImage.png" />
      <br />
      <br />
      <ReferralCard/>
    </CenterPage>
  )
}

export default Referrals