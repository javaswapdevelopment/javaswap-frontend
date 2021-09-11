import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'JavaSwap',
  description:
    'The most popular AMM on BSC by user count! Earn JAVA through yield farming or win it in the Lottery, then stake it in Espresso Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by JavaSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://javaswap.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('JavaSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('JavaSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('JavaSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('JavaSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('JavaSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('JavaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('JavaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('JavaSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('JavaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('JavaSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('JavaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('JavaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('JavaSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('JavaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('JavaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('JavaSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('JavaSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('JavaSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('JavaSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('JavaSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('JavaSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('JavaSwap Info & Analytics')}`,
        description: 'View statistics for Javaswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('JavaSwap Info & Analytics')}`,
        description: 'View statistics for Javaswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('JavaSwap Info & Analytics')}`,
        description: 'View statistics for Javaswap exchanges.',
      }
    default:
      return null
  }
}
