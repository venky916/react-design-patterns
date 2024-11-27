import { SplitScreen } from "../../components/layoutComponents/splitScreenComponents/SplitScreen";

const LeftHandComponent = ({ name }) => {
    return <h1 style={ { backgroundColor: "green" } }>{ name } !</h1>;
};

const RightHandComponent = ({ message }) => {
    return <h1 style={ { backgroundColor: "red" } }>{ message }!</h1>;
};

export const SplitScreenPage = () => {
    return (
        <SplitScreen leftWeight={ 1 } rightWeight={ 3 }>
            <LeftHandComponent name={ "venky" } />
            <RightHandComponent message={ "hello" } />
        </SplitScreen>
    );
};
