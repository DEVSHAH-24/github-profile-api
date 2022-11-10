import { LoginAction } from "../actions/LoginActions";

export const initialState = {
  user: undefined,
};

export const loginReducers = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case LoginAction.LOGIN_USER:
      console.log("login user ", LoginAction.LOGIN_USER);
      return { ...state, user: action.payload };

    case LoginAction.REGISTER_USER:
      return { ...state, user: action.payload };

    case LoginAction.LOGOUT_USER:
      return { ...state, user: undefined };
    default:
      console.log(state, "this is state");
      return state;
  }
};
