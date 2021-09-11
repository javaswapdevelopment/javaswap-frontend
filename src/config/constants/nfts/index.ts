import javaBunnies from './javaBunnies'
import { CollectionKey, Nfts } from './types'

const nfts: Nfts = {
  [CollectionKey.JAVA]: javaBunnies,
}

export default nfts
export { default as collections } from './collections'
