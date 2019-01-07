import * as React from "react";
import styled, { css } from "./styled";

type InputProps = {
  children: string;
  type: "text" | "number";
  name: string;
  onPrimary?: boolean;
};

let sharedInput = css`
  color: ${props => props.theme.primaryColorInverted};
  padding: ${props => props.theme.spacing * 2}%;
  border: 0;
  border-radius: 5px;
  min-width: 100%;
  font-family: ${props => props.theme.fontFamily};
  font-size: 0.8em;
`;
let StyledInputOnPrimary = styled.input`
  background: rgba(255, 255, 255, 0.09);
  ${sharedInput}
`;

let StyledInput = styled.input`
  background: ${props => props.theme.primaryColor};
  ${sharedInput}
`;

export const Input = (props: InputProps) => {
  let Component = props.onPrimary ? StyledInputOnPrimary : StyledInput;
  return (
    <Component
      name={props.name}
      type={props.type}
      defaultValue={props.children}
    />
  );
};
