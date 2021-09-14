import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  margin-bottom: 32px;
  width: 100%;
`
const Hero = () => {

  return (
    <StyledHero>
      <img style={{width: "100%"}} src="./images/banners/coming-soon.jpg" alt="JavaSwap" />
    </StyledHero>
  )
}

export default Hero
