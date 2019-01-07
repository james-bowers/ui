import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

import Modal from "../components/Modal";

describe("<Modal />", () => {
  test("shows the modal", () => {
    const tree = shallow(<Modal open={true}>content inside modal</Modal>);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test("hides the modal", () => {
    const tree = shallow(<Modal open={false}>content inside modal</Modal>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
