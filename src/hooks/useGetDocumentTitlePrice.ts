import { useEffect } from 'react'
import { useJavaUsdcPrice } from 'hooks/useUSDCPrice'

const useGetDocumentTitlePrice = () => {
  const javaPriceUsdc = useJavaUsdcPrice()
  useEffect(() => {
    const javaPriceUsdcString = javaPriceUsdc ? javaPriceUsdc.toFixed(2) : ''
    document.title = `Java Swap - ${javaPriceUsdcString}`
  }, [javaPriceUsdc])
}
export default useGetDocumentTitlePrice
