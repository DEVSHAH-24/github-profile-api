import * as React from "react";
import LogOutButton from "../../components/LogOutButton";

import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() });

const mockedDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockedDispatch,
}));

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

const getComponent = (props = {}) => shallow(<LogOutButton {...props} />);

describe("LogOutButton", () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it("Snapshot", () => {
    const component = getComponent();

    expect(component).toMatchSnapshot();
  });
  it("Button click process", () => {
    const component = getComponent();
    component.find('Button[testID="logout-btn"]').prop("onPress")();
    expect(component).toMatchSnapshot();
  });
});
