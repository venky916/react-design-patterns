import { ControlledOnboardingFlow } from '../../components/controlled/ControlledOnboradingFlow';

const StepOne = () => <h1>step 1</h1>;
const StepTwo = () => <h1>step 2</h1>;
const StepThree = () => <h1>step 3</h1>;

export const SimpleUnControlledOnboardingFlowPage = () => {
  return (
    <ControlledOnboardingFlow>
      <StepOne />
      <StepTwo />
      <StepThree />
    </ControlledOnboardingFlow>
  );
};
