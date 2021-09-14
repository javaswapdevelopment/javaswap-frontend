import { getReferralContractAddress } from "./addressHelpers"

const getReferralAddress = () => {
    const referralAddress = localStorage.getItem('ref')
    return referralAddress && referralAddress.length === 42 ? referralAddress : getReferralContractAddress()
  }

export default getReferralAddress 