import { shallow } from "enzyme";
import * as React from "react";
import TestRenderer, { act, create } from "react-test-renderer";
import { Main } from "../../screens/SearchUserProfile";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() });

const getComponent = (props = {}) => shallow(<Main {...props} />);
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

  it("on change text", () => {
    const component = getComponent();
    console.log(component.debug());
    //component.find('[testID="searchbar"]').prop("OnIconPress");
    expect(component).toMatchSnapshot();
  });
});
