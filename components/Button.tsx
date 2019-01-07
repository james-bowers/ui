import * as React from "react";
import styled from "./styled";

type ButtonProps = {
  children: string;
  onClick?: () => Promise<boolean>;
};

let StyledButton = styled.button`
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.accent};
  color: ${props => props.theme.accentInverted};
  padding: ${props => props.theme.spacing * 3}px;
  font-size: 1em;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

export default (props: ButtonProps) => (
  <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
);
