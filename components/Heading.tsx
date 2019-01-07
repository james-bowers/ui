import * as React from "react";
import styled, { css } from "./styled";

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: any;
};

const sharedHeading = css`
  font-family: ${props => props.theme.fontFamily};
`;

const H1 = styled.h1`
  font-size: 3em;
  ${sharedHeading}
`;

const H2 = styled.h2`
  font-size: 2.5em;
  ${sharedHeading}
`;

const H3 = styled.h3`
  font-size: 2em;
  ${sharedHeading}
`;

const H4 = styled.h4`
  font-size: 1.5em;
  ${sharedHeading}
`;

export default (props: HeadingProps) => {
  if (props.as === "h2") return <H2>{props.children}</H2>;
  if (props.as === "h3") return <H3>{props.children}</H3>;
  if (props.as === "h4") return <H4>{props.children}</H4>;

  return <H1>{props.children}</H1>;
};
