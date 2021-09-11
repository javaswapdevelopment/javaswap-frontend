const JAVA_EXTENDED = 'https://tokens.javaswap.io/javaswap-extended.json'
const JAVA_TOP100 = 'https://tokens.javaswap.io/javaswap-top-100.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  JAVA_TOP100,
  JAVA_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
