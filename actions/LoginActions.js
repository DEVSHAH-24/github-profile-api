//actions identified - logging in  and registering the user (2)
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export function handleLoginData(data) {
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function handleRegisterData(data) {
  return {
    type: REGISTER_USER,
    payload: data,
  };
}
