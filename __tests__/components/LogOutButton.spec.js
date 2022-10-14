import * as React from "react";
import TestRenderer, { act, create } from "react-test-renderer";
import LogOutButton from "../../components/LogOutButton";
import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

const mockedDispatch = jest.fn();

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

const getComponent = (props = {}) => <LogOutButton {...props} />;

describe("LogOutButton", () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it("button on press", () => {
    const component = getComponent();
    const { getByTestId } = render(<LogOutButton />);
    const button = getByTestId("logout-btn");
    fireEvent.press(button);
    expect(auth.currentUser).toBe(null);
    expect(component).toMatchSnapshot();
  });
  it("button on press 2", () => {
    const component = getComponent();
    const tree = create(component);
    const button = tree.root.findByProps({ testID: "logout-btn" }).props;
    act(() => button.onPress());
    expect(auth.currentUser).toBeNull();
  });
  // it("button on press fail", () => {
  //   const component = getComponent();
  //   const { getByTestId } = render(<LogOutButton />);
  //   const button = getByTestId("logout-btn");
  //   fireEvent.press(button);
  //   auth.currentUser = User();
  //   expect(auth.currentUser).not.toBeNull();
  // });
});
// it("button on press", () => {
//   const { getByTestId } = getComponent();
//   const testRenderer = TestRenderer.create(getByTestId);
//   act(() => render(getByTestId));

//   fireEvent.press(button);

//   expect(mockedDispatch).toHaveBeenCalledTimes(1);
//   expect(mockedDispatch).toHaveBeenCalledWith(DrawerActions.toggleDrawer());
