import * as React from "react";
import TestRenderer from "react-test-renderer";
import LoginScreen from "../../screens/LoginScreen";

const getComponent = (props = {}) => <LoginScreen {...props} />;
const mockedUsedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,

    useNavigation: () => ({
      navigation: mockedUsedNavigate,
    }),
  };
});
describe("LoginScreen", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });
  it("Snapshot", () => {
    const component = getComponent();

    const testRenderer = TestRenderer.create(component);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
