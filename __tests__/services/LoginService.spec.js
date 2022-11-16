import * as axios from "axios";
import {
  handleLogin,
  handleSignUp,
  handleSignOut,
  validateEmail,
  validateLogin,
} from "../../services/LoginService";

const mockedDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockedDispatch,
}));
describe("Login tests", () => {
  const email = "dev@gmail.com";
  const incorrectEmail = "devgmail.com";
  const password1 = "1234567";
  const password2 = "12345";
  const password3 = "12 45000";
  beforeEach(() => {
    mockedDispatch.mockClear();
  });
  test("validate email", () => {
    const output = validateEmail(email);
    const incorrectOutput = validateEmail(incorrectEmail);
    expect(output).not.toBe(null);
    expect(incorrectOutput).toEqual(null);
  });
  test("validate login", () => {
    expect(validateLogin(email, password1)).toEqual(true);

    expect(validateLogin(email, password2)).toEqual(false);
    expect(validateLogin(email, password3)).toEqual(false);
    expect(validateLogin(incorrectEmail, password2)).toEqual(false);
  });
  test("login", () => {});
  test("register", () => {});
});
