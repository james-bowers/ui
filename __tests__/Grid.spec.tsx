import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import * as Grid from "../components/Grid";

describe("<Grid />", () => {
  test("with grid child width", () => {
    const tree = shallow(
      <Grid.Container width={5}>content inside Grid</Grid.Container>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("without grid child width", () => {
    const tree = shallow(
      <Grid.Container width="equal">
        content inside of grid container
      </Grid.Container>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("grid item", () => {
    const tree = shallow(<Grid.Item>content inside of grid item</Grid.Item>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
