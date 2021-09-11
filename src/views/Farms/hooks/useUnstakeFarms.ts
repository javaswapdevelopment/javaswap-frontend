import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const masterBrewContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      await unstakeFarm(masterBrewContract, pid, amount)
    },
    [masterBrewContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
