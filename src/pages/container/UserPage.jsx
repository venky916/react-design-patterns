import { CurrentUserLoader } from '../../components/containerComponents/CurrentUserLoader';
import { UserInfo } from '../../components/containerComponents/UserInfo';
import { UserLoader } from '../../components/containerComponents/UserLoader';

export const UserPage = () => {
  const userIds = ['123','234','345']
  return (
    <>
      {userIds.map((id) => (
        <UserLoader userInfo={id} key={id}>
          <UserInfo />
        </UserLoader>
      ))}
    </>
  );
};
