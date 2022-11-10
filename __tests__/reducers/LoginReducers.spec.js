import { loginReducers, initialState } from "../../reducers/LoginReducers";
import { LoginAction } from "../../actions/LoginActions";

describe("Login reducer", () => {
  test("initial state", () => {
    expect(loginReducers()).toEqual(initialState);
  });
});
