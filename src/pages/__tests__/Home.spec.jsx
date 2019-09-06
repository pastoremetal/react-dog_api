import React from "react";
import { shallow } from "enzyme";

import Home from "../Home";

test("should render Home", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
