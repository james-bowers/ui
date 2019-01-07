import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import * as Input from "../components/Input";

describe("<Input />", () => {
  test("renders Input", () => {
    const tree = shallow(
      <Input.Input type="text" name="example-input">
        example value
      </Input.Input>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
