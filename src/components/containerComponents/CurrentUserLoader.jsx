import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/current-user');
        console.log(response);
        setUser(response.data);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

    return (
        <>
            {
                React.Children.map(children, child => {
                    if(React.isValidElement(child)){
                        return React.cloneElement(child,{user})
                    }
                    return child
                })
            }
        </>
  )
};
