import * as React from "react";
import styled from "./styled";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTopItem = styled.div`
  align-self: flex-start;
`;

const StyledBottomItem = styled.div`
  align-self: flex-end;
`;

export function Container(props: any) {
  return <StyledContainer {...props} />;
}

export function AtTop(props: any) {
  return <StyledTopItem {...props} />;
}

export function AtBottom(props: any) {
  return <StyledBottomItem {...props} />;
}
