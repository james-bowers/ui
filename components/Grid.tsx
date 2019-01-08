import * as React from "react";
import styled from "./styled";

const StyledGridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.width_equal > div.col {
    flex: 1;
  }

  ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    .map(
      widthNum => `
    &.width_${widthNum} > div.col {
    width: ${(widthNum / 12) * 100}%;
  }`
    )
    .join("")}
`;

const StyledItem = styled.div``;

type Width = "equal" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export let Container = (props: { children: any; width: Width }) => (
  <StyledGridWrapper className={`width_${props.width}`}>
    {props.children}
  </StyledGridWrapper>
);

export let Item = (props: { children: any }) => (
  <StyledItem className="col">{props.children}</StyledItem>
);
