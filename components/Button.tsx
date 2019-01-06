import * as React from "react";

type ButtonProps = {
  children: string;
  onClick?: () => Promise<boolean>;
};

export default (props: ButtonProps) => (
  <button onClick={props.onClick}>{props.children}</button>
);
