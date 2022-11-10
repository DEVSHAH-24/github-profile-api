import {
  LoginAction,
  handleLogOut,
  handleRegisterData,
  handleLoginData,
} from "../../actions/LoginActions";

describe("login actions", () => {
  test("user should be non null when logged in", () => {
    const data = "random123";
    const expectedAction = {
      type: LoginAction.LOGIN_USER,
      payload: data,
    };
    expect(handleLoginData(data)).toEqual(expectedAction);
  });
  test("user should be non null when logged in", () => {
    const data = "random123";
    const expectedAction = {
      type: LoginAction.REGISTER_USER,
      payload: data,
    };
    expect(handleRegisterData(data)).toEqual(expectedAction);
  });

  test("user should be null when logged out", () => {
    const data = undefined;
    const expectedAction = {
      type: LoginAction.LOGOUT_USER,
      payload: data,
    };
    expect(handleLogOut(data)).toEqual(expectedAction);
  });
});
