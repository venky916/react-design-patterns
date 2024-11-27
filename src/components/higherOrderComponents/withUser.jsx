import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState();

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    },[]);
    return <Component {...props} user={user} />;
  };
};
