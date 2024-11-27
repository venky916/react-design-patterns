import React, { useState, useEffect } from 'react';
import axios from 'axios';

const capaitalize = str=> str[0].toUpperCase()+str.slice(1)

export const withEditableResource = (Component, resourcePath,resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName] : data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
      };
      
      const resourceProps = {
          [resourceName]: data,
          [`onChange+${capaitalize(resourceName)}`]: onChange,
          [`onRest+${capaitalize(resourceName)}`]: onReset,
          [`onSave+${capaitalize(resourceName)}`]: onSave, 
    }

    return (
      <Component
            { ...props }
            {...resourceProps}
      />
    );
  };
};
