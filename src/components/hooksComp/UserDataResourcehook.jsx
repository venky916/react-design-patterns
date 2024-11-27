import styled from 'styled-components';
import { useDataSource } from '../../hooks/useDataSource';
import axios from 'axios';

const Heading = styled.h3`
  color: darkblue;
  font-size: 24px;
`;

const ListItem = styled.li`
  font-size: 16px;
`;

const serverResource = (resouceUrl) => async () => {
  const response = await axios.get(resouceUrl);
  return response.data;
}; 

const localStorageResource = (key) => () => {
  return Promise.resolve(localStorage.getItem(key));
};

export const UserDataResourcehook = ({ userId }) => {
    // const user = useDataSource(async() => {
    //     const response = await axios.get(`users/${userId}`);
    //     return response.data
    // })
    const user = useDataSource(serverResource(`users/${userId}`));
    const message = useDataSource(localStorageResource('message'));
  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <div className="p-4">
      <Heading>{name}</Heading>
      <p className="text-lg">Age: {age} years</p>
      <p className="text-lg text-red-700">Hair Color: {hairColor}</p>
      <Heading className="mt-4">Hobbies:</Heading>
      <ul className="list-disc pl-5">
        {hobbies.map((hobby) => (
          <ListItem key={hobby}>{hobby}</ListItem>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
