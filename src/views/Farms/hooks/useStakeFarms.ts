import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakeFarms = (pid: number) => {
  const masterBrewContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(masterBrewContract, pid, amount)
      console.info(txHash)
    },
    [masterBrewContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
