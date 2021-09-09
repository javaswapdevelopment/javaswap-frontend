import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Ifo, PoolIds } from 'config/constants/types'
import { WalletIfoData, PublicIfoData } from 'views/Ifos/types'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ContributeButton from './ContributeButton'
import ClaimButton from './ClaimButton'

interface Props {
  poolId: PoolIds
  ifo: Ifo
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
}

const IfoCardActions: React.FC<Props> = ({ poolId, ifo, publicIfoData, walletIfoData }) => {
  const { account } = useWeb3React()
  const userPoolCharacteristics = walletIfoData[poolId]

  if (!account) {
    return <ConnectWalletButton width="100%" />
  }

  return (
    <>
      {publicIfoData.status === 'live' && (
        <ContributeButton poolId={poolId} ifo={ifo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />
      )}
      {publicIfoData.status === 'finished' &&
        !userPoolCharacteristics.hasClaimed &&
        (userPoolCharacteristics.offeringAmountInToken.isGreaterThan(0) ||
          userPoolCharacteristics.refundingAmountInLP.isGreaterThan(0)) && (
          <ClaimButton poolId={poolId} ifoVersion={ifo.version} walletIfoData={walletIfoData} />
        )}
    </>
  )
}

export default IfoCardActions
