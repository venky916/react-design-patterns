import React, { useState } from 'react';

export const UnControlledOnboardingFlow = ({ onFinish, children }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoNext = (setData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onboardingData,
      ...setData,
      };
      
      console.log(updatedData);
      
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
      }
      
    setOnboardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { gotoNext });
  }

  return currentChild;
};
