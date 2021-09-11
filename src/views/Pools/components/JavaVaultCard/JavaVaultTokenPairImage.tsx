import React from 'react'
import { TokenPairImage, ImageProps } from '@javaswap/uikit'
import { mainnetTokens } from 'config/constants/tokens'

const JavaVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${mainnetTokens.java.address}.svg`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default JavaVaultTokenPairImage
