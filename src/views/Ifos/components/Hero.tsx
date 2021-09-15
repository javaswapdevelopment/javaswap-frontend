import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@javaswap/uikit'
import Container from 'components/Layout/Container'
import { useTranslation } from 'contexts/Localization'

const StyledHero = styled.div`
  padding-bottom: 40px;
  padding-top: 40px;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box mb="32px">
      <img src="/images/banners/coming-soon.jpg" alt="JAVASWAP" width="100%" />
      <StyledHero>
        <Container>
          <Heading as="h1" scale="xl" mb="24px">
            {t('IFO (Initial Farm Offerings)')}
          </Heading>
          <Text bold fontSize="15px" color="textSubtle">
            {t('Buy new tokens with a brand new token sale model.')}
          </Text>
        </Container>
      </StyledHero>
    </Box>
  )
}

export default Hero
