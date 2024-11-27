import React,{ useState } from "react"


export const SimpleUnControlledOnboardingFlow = ({children}) => {
    // const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setcurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex];

    return (
        <div className="flex gap-4">
            <button onClick={()=>setcurrentIndex(currentIndex-1)}>prev</button>
            { currentChild }  
            <button onClick={()=>setcurrentIndex(currentIndex+1)}>next</button>
        </div>
    )
}