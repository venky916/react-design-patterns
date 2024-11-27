import { useRef, useState } from 'react';
import { ControlledOnboardingFlow } from '../../components/controlled/ControlledOnboardingFlow';

const StepOne = ({ gotoNext }) => (
  <>
    <h1>step 1</h1>
    <button onClick={() => gotoNext({ name: 'Venky Maliga' })}>Next</button>
  </>
);

const StepTwo = ({ gotoNext }) => {
  const age = useRef(0);
  return (
    <>
      <h1>step 2</h1>
      <input type="number" ref={age} />
      <button onClick={() => gotoNext({ age: Number(age.current.value) })}>
        Next
      </button>
    </>
  );
};
const StepThree = ({ gotoNext }) => {
  return (
    <>
      <h1>step 3</h1>
      <p>Congrata u qualify for our senior discount babes </p>
      <button onClick={() => gotoNext()}>Next</button>
    </>
  );
};

const StepFour = ({ gotoNext }) => {
  const [hairColor, setHairColor] = useState('');
  return (
    <>
      <h1>step 4</h1>
      <input
        type="text"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button onClick={() => gotoNext({ hairColor })}>Next</button>
    </>
  );
};

export const ControlledOnboardingFlowPage = () => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
    
    const onNext = (setData) => {
        setCurrentIndex(currentIndex + 1);
        setOnboardingData({ ...onboardingData, ...setData })
        console.log(onboardingData);
  };


  const onFinish = (finalData) => {
    const allData = { ...onboardingData, ...finalData };
    console.log('Onboarding complete!', allData);
    alert('Onboarding complete! Check the console for details.');
  };

  return (
    <>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext} onFinish={onFinish}>
        <StepOne />
        <StepTwo />
        {onboardingData.age>20 && <StepThree /> }
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
};
