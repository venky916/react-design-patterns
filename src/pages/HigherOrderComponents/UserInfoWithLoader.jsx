import { withUser } from "../../components/higherOrderComponents/withUser"
import { UserInfo } from "../../components/containerComponents/UserInfo"

const UserInfoLoader = withUser(UserInfo , "234");
export const UserInfoWithLoader = () => {
  return <UserInfoLoader />
}