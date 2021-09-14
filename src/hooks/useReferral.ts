
import { useWeb3React } from "@web3-react/core"
import { NEVER_RELOAD, useSingleCallResult } from "state/multicall/hooks"
import { useReferralContract } from "./useContract"

const useReferrals = () => {
  const { account } = useWeb3React()

  const inputs = [account]
  const referralContract = useReferralContract()
    
  const referrals = useSingleCallResult(referralContract, 'referralsCount',inputs, NEVER_RELOAD).result
  return referrals
}

export default useReferrals