import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterbrew } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const masterBrewContract = useMasterbrew()

  const handleHarvest = useCallback(async () => {
    await harvestFarm(masterBrewContract, farmPid)
  }, [farmPid, masterBrewContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
