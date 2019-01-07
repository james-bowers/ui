import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import Area, { Padding } from "../components/Area";

describe("<Area />", () => {
  test("renders Area", () => {
    const tree = shallow(<Area>example Area</Area>);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("renders Padding", () => {
    const tree = shallow(<Padding multiplier={3}>example Area</Padding>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
