import * as React from "react";
import styled, { css } from "./styled";

const sharedAreaStyle = css`
  width: 100%;
`;

const HeroArea = styled.div`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColorInverted};
  ${sharedAreaStyle}
`;

const StandardArea = styled.div`
  ${sharedAreaStyle}
`;

let StyledPadding = styled.div`
  &.padding_1 {
    padding: ${props => props.theme.spacing * 5}px;
  }

  &.padding_2 {
    padding: ${props => props.theme.spacing * 10}px;
  }

  &.padding_3 {
    padding: ${props => props.theme.spacing * 15}px;
  }

  &.padding_4 {
    padding: ${props => props.theme.spacing * 20}px;
  }

  &.padding_5 {
    padding: ${props => props.theme.spacing * 25}px;
  }
`;

export function Padding(props: {
  children: any;
  multiplier: 1 | 2 | 3 | 4 | 5;
}) {
  return (
    <StyledPadding className={`padding_${props.multiplier}`}>
      {props.children}
    </StyledPadding>
  );
}

export default (props: { hero?: boolean; children: any }) => {
  let Area = props.hero ? HeroArea : StandardArea;

  return <Area>{props.children}</Area>;
};
