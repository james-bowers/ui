import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import Heading from "../components/Heading";

describe("<Heading />", () => {
  test("renders H1", () => {
    const tree = shallow(<Heading as="h1">Heading one</Heading>);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("renders H2", () => {
    const tree = shallow(<Heading as="h2">Heading two</Heading>);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("renders H3", () => {
    const tree = shallow(<Heading as="h3">Heading two</Heading>);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("renders H4", () => {
    const tree = shallow(<Heading as="h4">Heading two</Heading>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
