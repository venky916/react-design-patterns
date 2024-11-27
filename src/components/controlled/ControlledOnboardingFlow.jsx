import React from 'react';

export const ControlledOnboardingFlow = ({
  children,
  currentIndex,
  onNext,
  onFinish,
}) => {
  
  const gotoNext = (setData) => {
    console.log(currentIndex, children, children.length);
    if (currentIndex + 1 < children.length) {
      onNext(setData);
    } else {
      onFinish(setData);
    }
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { gotoNext });
  }

  return currentChild;
};
