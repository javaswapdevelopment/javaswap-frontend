// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Text } from '@javaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Hero from './components/Hero'



const Content = styled.div`
  display: block;
  padding: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr minmax(auto, 436px);
  }
`

const CenterdDiv = styled.div`
  text-align: center;

`

const ComingSoon = ({title, content}) => {
  const { t } = useTranslation()

  return (
    <>
      <Hero />
      <Content>
        <Text color="primary" fontSize="60px" bold>
          {title}
        </Text>
        <Text color="textSubtle">
          {content}
        </Text>
        <CenterdDiv>
          <img src="./images/Soon.svg" alt="JavaSwap" /> <br />
          <br />
          <Text color="primary" fontSize="35px" bold>
            {t('COMING SOON')}
          </Text>
          <Text color="textSubtle">
            {t('We are working on it for you')}
          </Text>
        </CenterdDiv>
      </Content>
    </>
  )
}

export default ComingSoon
