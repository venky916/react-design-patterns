// import { SplitScreenPage } from "./pages/SplitScreenPage";
// import { ListsPage } from "./pages/ListsPage";
// import { ModalPage } from "./pages/layout/ModalPage";
// import { UserPage } from "./pages/container/UserPage";
// import { ContainerPage } from "./pages/container/ContainerPage";
// import { DataSourcePage } from "./pages/container/DataSourcePage";
// import { ControlledModalPage } from "./pages/contolledPages/ControlledModalPage";
// import { ControlledForm } from "./components/controlled/ControlledForms";
// import { UnControlledPage } from "./pages/layout/UnControlledPage";
// import { ControlledOnboardingFlowPage } from "./pages/contolledPages/ContolledOnboardingFlowPage";
// import { UnControlledOnboardingFlowPage } from "./pages/contolledPages/UnControlledOnBoardingflowPage";
// import { ControlledOnboardingFlowPage } from  './pages/contolledPages/ControlledOnboardingflowPage'
// import { UserInfoWithLoader } from './pages/HigherOrderComponents/UserInfoWithLoader';
// import { UserInfoWrapped } from './pages/HigherOrderComponents/UserInfoWrapped';
// import { UserInfoResourceForm } from './components/higherOrderComponents/UserInfoRescorceForm';
// import { UserInfoFormPage } from './pages/HigherOrderComponents/UserInfoFormPage';
// import { UserIdPage } from "./pages/hookPages/UserIdPage";
// import { UserResourcePage } from "./pages/hookPages/UserResourcePage";
// import {UserDetail} from  './components/hooksComp/UserDetail'
// import { UserDetailsID } from './components/hooksComp/UserDetailsID';
// import { UserResourcehook } from './components/hooksComp/UserResourcehook'
// import { ProductResourcehook } from './components/hooksComp/ProductResourcehook'
// import { UserDataResourcehook } from './components/hooksComp/UserDataResourcehook';

import { DangerButton, SucessButton } from "./components/functionalProgramming/PartiallyApply";

// import { RecursivePage } from "./pages/FunctionalProgrammingPages/RecursivePage";

export default function App() {
  return (
    <>
      <DangerButton text={ "dont touch me boys" } />
      <SucessButton text={ "touch me u can touch me"} />
    </>
  );
}