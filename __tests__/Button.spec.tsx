import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import Button from "../components/Button";

describe("<Button />", () => {
  test("renders Button", () => {
    const tree = shallow(<Button>example button</Button>);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("renders Button with onClick", () => {
    const tree = shallow(
      <Button
        onClick={() => {
          console.log("clicked");
          return Promise.resolve(true);
        }}
      >
        example button
      </Button>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
