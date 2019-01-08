import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import BarGraph from "../components/BarGraph";

describe("<BarGraph />", () => {
  test("renders BarGraph", () => {
    const tree = shallow(
      <BarGraph
        height={200}
        data={[
          {
            value: 35
          },
          {
            value: 75
          },
          {
            value: 5
          },
          {
            value: 20
          },
          {
            value: 39
          },
          {
            value: 95
          }
        ]}
      />
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
