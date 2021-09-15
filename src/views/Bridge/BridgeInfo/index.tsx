import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Card, CardHeader, CardBody, Flex } from '@javaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FoldableText from 'components/FoldableText'
import config from './config'

const DetailsWrapper = styled.div`
  order: 1;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 2;
    margin-bottom: 0;
    margin-left: 40px;
  }
`

const CardHeaderStyled = styled(CardHeader)`
  background:  ${({ theme }) => theme.colors.input}
`

const BridgeInfo = () => {
  const { t } = useTranslation()

  return (
    <Flex alignItems={['center', null, null, 'start']} flexDirection={['column', null, null, 'row']}>
      <DetailsWrapper>
        <Card>
          <CardHeaderStyled >
            <Heading scale="lg" color="primary">
              {t('Details')}
            </Heading>
          </CardHeaderStyled>
          <CardBody>
            {config.map(({ title, description }, i, { length }) => (
              <FoldableText key={title} id={title} mb={i + 1 === length ? '' : '24px'} title={t(title)}>
                {description.map((desc) => {
                  return (
                    <Text key={desc} color="textSubtle" as="p">
                      {t(desc)}
                    </Text>
                  )
                })}
              </FoldableText>
            ))}
          </CardBody>
        </Card>
      </DetailsWrapper>
    </Flex>
  )
}

export default BridgeInfo
