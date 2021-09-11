import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Polygon in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.javaswap.io/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'MATIC', alt: 'MATIC token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'JAVA', alt: 'JAVA token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'JavaSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.javaswap.io/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with java token' },
    ],
  },
}

export const javaSectionData: SalesSectionProps = {
  headingText: 'JAVA makes our world go round.',
  bodyText:
    'JAVA token is at the heart of the JavaSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy JAVA',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.javaswap.io/tokenomics/java',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/java/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d java' },
      { src: 'top-right', alt: 'Small 3d java' },
      { src: 'coin', alt: 'JAVA token' },
      { src: 'top-left', alt: 'Small 3d java' },
    ],
  },
}
