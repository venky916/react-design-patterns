import styled from 'styled-components';
import { useUser } from '../../hooks/useUser';

const Heading = styled.h3`
  color: darkblue;
  font-size: 24px;
`;

const ListItem = styled.li`
  font-size: 16px;
`;

export const UserDetailsID = ({userId}) => {
  const user = useUser(userId);
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
