import React from 'react'
import { Heading, Flex, Text, CommunityIcon, RocketIcon, SupportIcon } from '@javaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'


const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="50px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <RocketIcon color="primary" width="40px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <SupportIcon color="failure" width="60px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="48px" width="48px" mb="24px" />
      <Heading color="yellowTitle" textAlign="center" scale="xl">
        {t('For the people, by the people,')}
      </Heading>
      <Heading color="yellowTitle" textAlign="center" scale="xl" mb="32px">
        {t('with the people: ')} {t('Javaswap')} 
      </Heading>
      <Text textAlign="center" color="contrast">
        {t('JavaSwap is increasing the accessibility and usability .')}
      </Text>
      <Text display="inline" textAlign="center" color="contrast" mb="20px">
        {t('of DeFi by making its services affordable for all! Just. Join. JAVA.')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Every day')}
            bodyText={t('More and more people turn to crypto and use their own wallets to be truly in control of their own finances. Control your own financial future with JavaSwap.')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('The era ')}
            bodyText={t('Of decentralisation is upon us and decentralised finance is the first true step to financial freedom. Never lose control with JavaSwap.')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Support')}
            bodyText={t('The decentralised revolution and receive rewards galore. Be part of the revolution and the revolution will be part of you!')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </Flex>
  )
}

export default Stats
