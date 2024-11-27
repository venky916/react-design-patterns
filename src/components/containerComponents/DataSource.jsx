import React, { useState, useEffect } from 'react';

export const DataSource = ({ getDataFunc = ()=>{}, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async() => {
      try {
        const data = await getDataFunc();
        setState(data);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, [getDataFunc]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
