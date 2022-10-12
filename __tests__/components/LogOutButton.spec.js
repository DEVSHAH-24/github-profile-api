import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import * as React from "react";
import { Button } from "react-native";
import TestRenderer from "react-test-renderer";
import LogOutButton from "../../components/LogOutButton";
import { auth } from "../../firebase";

const getComponent = (props = {}) => <LogOutButton {...props} />;
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
describe("LogOutButton", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });
  test("snapshot", () => {
    const navigation = useNavigation();

    const component = getComponent();

    const testRenderer = TestRenderer.create(component);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  test("handle sign out", () => {
    const navigation = useNavigation();

    const component = getComponent();

    const testRenderer = TestRenderer.create(component);

    // const handleSignOut = () => {
    //   signOut(auth)
    //     .then(() => {
    //       navigation.navigate("Login");
    //     })
    //     .catch((e) => alert("hello"));
    // };
    // expect(testRenderer.toJSON()).toContain(handleSignOut());
  });
});
