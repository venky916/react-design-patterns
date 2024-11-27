import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserLoader = ({ userInfo,children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/users/${userInfo}`);
        setUser(response.data);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, [userInfo]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
