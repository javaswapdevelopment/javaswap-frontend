import BigNumber from 'bignumber.js'
import { getJavaVaultContract } from 'utils/contractHelpers'

const javaVaultContract = getJavaVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await javaVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      javaAtLastUserAction: new BigNumber(userContractResponse.javaAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      javaAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
