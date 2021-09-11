/// <reference types="react-scripts" />

interface Window {
  ethereum?: {
    isMetaMask?: true
    request?: (...args: any[]) => Promise<void>
  }
  BinanceChain?: {
    maticSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
  }
}

type SerializedBigNumber = string
