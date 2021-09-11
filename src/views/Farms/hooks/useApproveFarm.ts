import { useCallback } from 'react'
import { ethers, Contract } from 'ethers'
import { useMasterchef } from 'hooks/useContract'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'

const useApproveFarm = (lpContract: Contract) => {
  const masterBrewContract = useMasterchef()
  const { callWithGasPrice } = useCallWithGasPrice()
  const handleApprove = useCallback(async () => {
    try {
      const tx = await callWithGasPrice(lpContract, 'approve', [
        masterBrewContract.address,
        ethers.constants.MaxUint256,
      ])
      const receipt = await tx.wait()
      return receipt.status
    } catch (e) {
      return false
    }
  }, [lpContract, masterBrewContract, callWithGasPrice])

  return { onApprove: handleApprove }
}

export default useApproveFarm
