import * as React from "react";
import TestRenderer, { act, create } from "react-test-renderer";
import { Main } from "../../screens/SearchUserProfile";
import { render, fireEvent } from "@testing-library/react";

const getComponent = (props = {}) => <Main {...props} />;
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

describe("SearchUserProfile - match snapshot", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });
  it("Snapshot", () => {
    const component = getComponent();

    const testRenderer = TestRenderer.create(component);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it("Search input", () => {
    const component = getComponent();
    const tree = create(component);
    const setFn = jest.fn();
    const searchBar = tree.root.findByProps({ testID: "searchbar" }).props;

    act(() => {
      //searchBar.props({ onChangeText: { setFn } });
    });
    expect(setFn).toHaveBeenCalled();
  });
  it("Search input 2", () => {
    const getUserData = jest.fn((value) => {});
    const renderMain = render(<Main />);

    const searchbar = getBy(renderMain);
  });
});
