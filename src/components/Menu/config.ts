import { MenuEntry, menuStatus } from '@javaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Swap'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Trade'),
        href: '/swap',
        icon: 'TradeIcon',
      },
      {
        label: t('Bridge'),
        href: '/liquidity',
        icon: 'BridgeIcon',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Games'),
    icon: 'GamesIcon',
    items: [
      {
        label: t('Lottery'),
        icon: 'TicketIcon',
        href: '/lottery',
      },
    ]
  },
  {
    label: t('Referrals'),
    icon: 'ReferralIcon',
    href: '/',
  },
  {
    label: t('NFT'),
    icon: 'NFTIcon',
    href: '/',
    status: menuStatus.SOON
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
    status: menuStatus.SOON
  },
  {
    label: t('Analytics'),
    icon: 'AnalyticIcon',
    href: '/info',
  },
  {
    label: t('Audits'),
    icon: 'AuditsIcon',
    href: '/',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.javaswap.io/contact-us',
      },
      {
        label: t('Github'),
        href: 'https://github.com/javaswapdevelopment',
      },
      {
        label: t('Docs'),
        href: 'https://docs.javaswap.io',
      },
      {
        label: t('Blog'),
        href: 'https://javaswap.medium.com',
      },
    ],
  },
]

export default config
