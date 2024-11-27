import { printProps } from "../../components/higherOrderComponents/printProps";
import { UserInfo } from "../../components/containerComponents/UserInfo";

const UserInfoWrapper = printProps(UserInfo);

export const UserInfoWrapped = () => <UserInfoWrapper a={1} b="string" c={{1:"hello"}} />