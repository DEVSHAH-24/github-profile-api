//actions identified - logging in  and registering the user (2)
export const LoginAction = {
  LOGIN_USER: "LOGIN_USER",
  REGISTER_USER: "REGISTER_USER",
  LOGOUT_USER: "LOGOUT_USER",
};

export function handleLoginData(data) {
  return {
    type: LoginAction.LOGIN_USER,
    payload: data,
  };
}

export function handleRegisterData(data) {
  return {
    type: LoginAction.REGISTER_USER,
    payload: data,
  };
}

export function handleLogOut() {
  return {
    type: LoginAction.LOGOUT_USER,
  };
}
