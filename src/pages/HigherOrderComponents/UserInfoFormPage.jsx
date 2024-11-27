import { withEditableUser } from "../../components/higherOrderComponents/withEditableUser";
import { UserInfoForm } from "../../components/higherOrderComponents/UserInfoForm";

// const UserForm = withEditableUser(UserInfoForm, '234');

export const UserInfoFormPage = () => {
    return <UserInfoForm />;
}