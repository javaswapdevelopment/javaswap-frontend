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
    to: 'https://javaswapgitbook.gitbook.io/javaswap/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'MATIC', alt: 'MATIC token' },
      { src: 'ETH', alt: 'ETH token' },
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
    to: 'https://javaswapgitbook.gitbook.io/javaswap/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'star', alt: 'JavaSwap' },
      { src: 'java', alt: 'JavaSwap' },
      { src: 'matic', alt: 'Polygon' },
    ],
  },
}

export const javaSectionData: SalesSectionProps = {
  headingText: 'JAVA makes our world go round.',
  bodyText:
    'JAVA token is at the heart of the JavaSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5',
    text: 'Buy JAVA',
    external: false,
  },
  secondaryButton: {
    to: 'https://javaswapgitbook.gitbook.io/javaswap/tokenomics/java',
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
