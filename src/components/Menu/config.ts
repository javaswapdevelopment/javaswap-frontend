import { MenuEntry, menuStatus } from '@javaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },{
    label: t('Presale'),
    icon: 'PresaleIcon',
    href: 'https://presale.javaswap.io/',
  },
  {
    label: t('Swap'),
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: t('Bridge'),
    href: '/bridge',
    icon: 'BridgeIcon',
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
        label: t('Lucky Lotto'),
        icon: 'LottoIcon',
        href: '/lottery',
      },
    ]
  },
  {
    label: t('Referrals'),
    icon: 'ReferralIcon',
    href: '/referral',
  },
  {
    label: t('NFT'),
    icon: 'NftIcon',
    href: '/nft',
    status: menuStatus.SOON
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('Analytics'),
    icon: 'AnalyticIcon',
    href: '/info',
  },
  {
    label: t('Audits'),
    icon: 'AuditsIcon',
    href: 'https://javaswap.gitbook.io/javaswap/security/audits',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://javaswap.gitbook.io/javaswap/social-media-and-contact',
      },
      {
        label: t('Github'),
        href: 'https://github.com/javaswapdevelopment',
      },
      {
        label: t('Docs'),
        href: 'https://javaswap.gitbook.io/javaswap',
      },
      {
        label: t('Blog'),
        href: 'https://javaswapofficial.medium.com/ ',
      },
    ],
  },
]

export default config
