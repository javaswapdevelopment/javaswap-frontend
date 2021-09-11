import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const masterBrewContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    await harvestFarm(masterBrewContract, farmPid)
  }, [farmPid, masterBrewContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
