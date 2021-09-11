export enum Tiers {
  GOLD = 'Gold',
  SILVER = 'Silver',
  BRONZE = 'Bronze',
  PURPLE = 'Purple',
  TEAL = 'Teal',
}

export interface Achievement {
  champion?: number
  teamPlayer?: number
  trophy: number
}

export interface Rank {
  group: string
  rank: string
  tier: Tiers
  javaPrizeInUsd: number
  achievements: Achievement
  hasNft: boolean
}

interface Config {
  [key: string]: Rank[]
}

const easterPrizes: Config = {
  1: [
    {
      group: '4',
      rank: '1',
      tier: Tiers.GOLD,
      javaPrizeInUsd: 21000,
      achievements: {
        champion: 1250,
        teamPlayer: 750,
        trophy: 500,
      },
      hasNft: true,
    },
    {
      group: '3',
      rank: '2 ~ 10',
      tier: Tiers.SILVER,
      javaPrizeInUsd: 49000,
      achievements: {
        teamPlayer: 750,
        trophy: 500,
      },
      hasNft: true,
    },
    {
      group: '2',
      rank: '11 ~ 100',
      tier: Tiers.BRONZE,
      javaPrizeInUsd: 42000,
      achievements: {
        teamPlayer: 750,
        trophy: 500,
      },
      hasNft: true,
    },

    {
      group: '1',
      rank: '101 ~ 500',
      tier: Tiers.PURPLE,
      javaPrizeInUsd: 28000,
      achievements: {
        teamPlayer: 750,
        trophy: 500,
      },
      hasNft: true,
    },

    {
      group: '0',
      rank: '501+',
      tier: Tiers.TEAL,
      javaPrizeInUsd: 0,
      achievements: {
        trophy: 500,
      },
      hasNft: false,
    },
  ],
  2: [
    {
      group: '4',
      rank: '1',
      tier: Tiers.GOLD,
      javaPrizeInUsd: 6000,
      achievements: {
        champion: 1250,
        teamPlayer: 750,
        trophy: 250,
      },
      hasNft: false,
    },
    {
      group: '3',
      rank: '2 ~ 10',
      tier: Tiers.SILVER,
      javaPrizeInUsd: 14000,
      achievements: {
        teamPlayer: 750,
        trophy: 250,
      },
      hasNft: false,
    },
    {
      group: '2',
      rank: '11 ~ 100',
      tier: Tiers.BRONZE,
      javaPrizeInUsd: 12000,
      achievements: {
        teamPlayer: 750,
        trophy: 250,
      },
      hasNft: false,
    },
    {
      group: '1',
      rank: '101 ~ 500',
      tier: Tiers.PURPLE,
      javaPrizeInUsd: 8000,
      achievements: {
        teamPlayer: 750,
        trophy: 250,
      },
      hasNft: false,
    },
    {
      group: '0',
      rank: '501+',
      tier: Tiers.TEAL,
      javaPrizeInUsd: 0,
      achievements: {
        trophy: 250,
      },
      hasNft: false,
    },
  ],
  3: [
    {
      group: '4',
      rank: '1',
      tier: Tiers.GOLD,
      javaPrizeInUsd: 3000,
      achievements: {
        champion: 1250,
        teamPlayer: 750,
        trophy: 100,
      },
      hasNft: false,
    },
    {
      group: '3',
      rank: '2 ~ 10',
      tier: Tiers.SILVER,
      javaPrizeInUsd: 7000,
      achievements: {
        teamPlayer: 750,
        trophy: 100,
      },
      hasNft: false,
    },
    {
      group: '2',
      rank: '11 ~ 100',
      tier: Tiers.BRONZE,
      javaPrizeInUsd: 6000,
      achievements: {
        teamPlayer: 750,
        trophy: 100,
      },
      hasNft: false,
    },
    {
      group: '1',
      rank: '101 ~ 500',
      tier: Tiers.PURPLE,
      javaPrizeInUsd: 4000,
      achievements: {
        teamPlayer: 750,
        trophy: 100,
      },
      hasNft: false,
    },
    {
      group: '0',
      rank: '501+',
      tier: Tiers.TEAL,
      javaPrizeInUsd: 0,
      achievements: {
        trophy: 100,
      },
      hasNft: false,
    },
  ],
}

export default easterPrizes
