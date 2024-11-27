import { DataSource } from '../../components/containerComponents/DataSource';
import { UserInfo } from '../../components/containerComponents/UserInfo';
import axios from 'axios';

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
    console.log(key);
  return localStorage.getItem(key);
};

const Text = ({message}) => <h1>{message}</h1>;

export const DataSourcePage = () => {
  return (
    <>
      <DataSource
        getDataFunc={getServerData('/users/123')}
        resourceName={'user'}
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName={'message'}
      >
        <Text />
      </DataSource>
    </>
  );
};
