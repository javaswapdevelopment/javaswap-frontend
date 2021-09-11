import { useBlocksFromTimestamps } from 'views/Info/hooks/useBlocksFromTimestamps'
import { getDeltaTimestamps } from 'views/Info/utils/infoQueryHelpers'
import { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import { INFO_CLIENT } from 'config/constants/endpoints'

export interface MaticPrices {
  current: number
  oneDay: number
  twoDay: number
  week: number
}

const MATIC_PRICES = gql`
  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {
    current: bundle(id: "1") {
      maticPrice
    }
    oneDay: bundle(id: "1", block: { number: $block24 }) {
      maticPrice
    }
    twoDay: bundle(id: "1", block: { number: $block48 }) {
      maticPrice
    }
    oneWeek: bundle(id: "1", block: { number: $blockWeek }) {
      maticPrice
    }
  }
`

interface PricesResponse {
  current: {
    maticPrice: string
  }
  oneDay: {
    maticPrice: string
  }
  twoDay: {
    maticPrice: string
  }
  oneWeek: {
    maticPrice: string
  }
}

const fetchMaticPrices = async (
  block24: number,
  block48: number,
  blockWeek: number,
): Promise<{ maticPrices: MaticPrices | undefined; error: boolean }> => {
  try {
    const data = await request<PricesResponse>(INFO_CLIENT, MATIC_PRICES, {
      block24,
      block48,
      blockWeek,
    })
    return {
      error: false,
      maticPrices: {
        current: parseFloat(data.current?.maticPrice ?? '0'),
        oneDay: parseFloat(data.oneDay?.maticPrice ?? '0'),
        twoDay: parseFloat(data.twoDay?.maticPrice ?? '0'),
        week: parseFloat(data.oneWeek?.maticPrice ?? '0'),
      },
    }
  } catch (error) {
    console.error('Failed to fetch MATIC prices', error)
    return {
      error: true,
      maticPrices: undefined,
    }
  }
}

/**
 * Returns MATIC prices at current, 24h, 48h, and 7d intervals
 */
export const useMaticPrices = (): MaticPrices | undefined => {
  const [prices, setPrices] = useState<MaticPrices | undefined>()
  const [error, setError] = useState(false)

  const [t24, t48, tWeek] = getDeltaTimestamps()
  const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48, tWeek])

  useEffect(() => {
    const fetch = async () => {
      const [block24, block48, blockWeek] = blocks
      const { maticPrices, error: fetchError } = await fetchMaticPrices(block24.number, block48.number, blockWeek.number)
      if (fetchError) {
        setError(true)
      } else {
        setPrices(maticPrices)
      }
    }
    if (!prices && !error && blocks && !blockError) {
      fetch()
    }
  }, [error, prices, blocks, blockError])

  return prices
}
