import { loginReducers, initialState } from "../../reducers/LoginReducers";
import { LoginAction } from "../../actions/LoginActions";

describe("Login reducer", () => {
  test("initial state", () => {
    expect(loginReducers()).toEqual(initialState);
  });
  test("LOGIN_USER", () => {
    const data = "RANDOM123";
    const action = { type: LoginAction.LOGIN_USER, payload: data };

    expect(loginReducers(initialState, action)).toEqual({ user: data });
  });
  test("REGISTER_USER", () => {
    const data = "RANDOM123";
    const action = { type: LoginAction.REGISTER_USER, payload: data };

    expect(loginReducers(initialState, action)).toEqual({ user: data });
  });
  test("LOGOUT_USER", () => {
    const action = { type: LoginAction.LOGOUT_USER };

    expect(loginReducers(initialState, action)).toEqual({});
  });
});
