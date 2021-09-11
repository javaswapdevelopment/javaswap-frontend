import { useEffect } from 'react'
import { useJavaBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const javaPriceBusd = useJavaBusdPrice()
  useEffect(() => {
    const javaPriceBusdString = javaPriceBusd ? javaPriceBusd.toFixed(2) : ''
    document.title = `Java Swap - ${javaPriceBusdString}`
  }, [javaPriceBusd])
}
export default useGetDocumentTitlePrice
