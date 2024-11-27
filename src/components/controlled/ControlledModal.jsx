import styled from 'styled-components';

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
  background-color: white;
  padding: 20px;
  margin: 10% auto;
  width: 50%;
`;
// ContolledModal
export const ControlledModal = ({ show , onClose , children }) => {

    return show ? (
        <ModalBackground onClick={ onClose }>
            <ModalBody onClick={ (e) => e.stopPropagation() }>
                <button onClick={ onClose }>Hide Modal</button>
                { children }
            </ModalBody>
        </ModalBackground>
    ) : null;
};
