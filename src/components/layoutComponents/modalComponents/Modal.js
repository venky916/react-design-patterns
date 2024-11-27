import { useState } from "react"
import styled from "styled-components"

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
`;


const ModalBody = styled.div`
    background-color :white;
    padding :20px;
    margin :10% auto;
    width:50%
`
// unContolledModal
export const Modal = ({ children }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={ () => setShow(true) }>ShowModal</button>
            { show && (
                <ModalBackground onClick={ () => setShow(false) }>
                    <ModalBody onClick={e=>e.stopPropagation()}>
                        <button onClick={ () => setShow(false) }>Hide Modal</button>
                        { children }
                    </ModalBody>
                </ModalBackground>
            ) }

        </>

    )
}