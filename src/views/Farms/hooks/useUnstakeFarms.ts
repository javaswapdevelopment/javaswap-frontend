import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterbrew } from 'hooks/useContract'

const useUnstakeFarms = (pid: number) => {
  const masterBrewContract = useMasterbrew()

  const handleUnstake = useCallback(
    async (amount: string) => {
      await unstakeFarm(masterBrewContract, pid, amount)
    },
    [masterBrewContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
