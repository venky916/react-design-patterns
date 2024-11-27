import { useRef, useState } from 'react';
import { UnControlledOnboardingFlow } from '../../components/controlled/UnControlledOnboardingFlow';

const StepOne = ({ gotoNext }) => (
  <>
    <h1>step 1</h1>
    <button onClick={()=>gotoNext({name :"Venky Maliga"})}>Next</button>
  </>
);

const StepTwo = ({ gotoNext }) => {
  const age = useRef(0)
  return (
    <>
      <h1>step 2</h1>
      <input type="number" ref={age} />
      <button onClick={ () => gotoNext({ age:Number(age.current.value) })}>Next</button>
    </>
  );
};
const StepThree = ({ gotoNext }) => {
  const [hairColor ,setHairColor] = useState('')
  return (
    <>
      <h1>step 3</h1>
      <input type="text" value={hairColor} onChange={(e)=>setHairColor(e.target.value)} />
      <button onClick={()=>gotoNext({hairColor})}>Next</button>
    </>
  );
};

export const UnControlledOnboardingFlowPage = () => {
  return (
    <>
      <UnControlledOnboardingFlow onFinish={ (data) => {
        console.log(data);
        alert("Onbaording process completed.....",data);
       } }>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControlledOnboardingFlow>
    </>
  );
};
