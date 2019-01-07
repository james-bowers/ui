import * as React from "react";
import styled, { keyframes } from "./styled";

type ModalProps = {
  children: any;
  open: boolean;
  onWrapperClicked?: Function;
};

let ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
`;

let ModalContent = styled.div`
  max-width: 50%;
  max-height: 50%;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColorInverted};
`;

export default (props: ModalProps) => (
  <div>
    {props.open && (
      <ModalWrapper
        onClick={() => props.onWrapperClicked && props.onWrapperClicked()}
      >
        <ModalContent
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            return false;
          }}
        >
          {props.children}
        </ModalContent>
      </ModalWrapper>
    )}
  </div>
);
