import { useState } from "react"
import { ControlledModal } from "../../components/controlled/ControlledModal"



export const ControlledModalPage = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
        <button onClick={()=>setShow(!show)}>{ show ? "Hide Modal" : "Show Modal"}</button>
        <ControlledModal show={show} onClose={()=>setShow(!show)}>
            <h1>Hii friends</h1>
        </ControlledModal>
        </>
    )
}