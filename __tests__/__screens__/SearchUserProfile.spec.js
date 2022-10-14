import * as React from "react";
import TestRenderer, { act, create } from "react-test-renderer";
import { Main } from "../../screens/SearchUserProfile";

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
    const userDatafcn = jest.fn();
    const setSearchInput = jest.fn((value) => {});
    const component = getComponent();
    const tree = create(component);
    const searchBar = tree.root.findByProps({ testID: "searchbar" }).props;
    console.log(searchBar);
    act(() => {
      searchBar.onChangeText("hello");
      searchBar.onIconPress();
      //   searchBar.onPress();
    });
  });
});
