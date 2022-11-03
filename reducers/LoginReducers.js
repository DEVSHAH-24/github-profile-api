import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
} from "../actions/LoginActions";

const initialState = {
  user: undefined,
};

export const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };

    case REGISTER_USER:
      return { ...state, user: action.payload };

    case LOGOUT_USER:
      return { ...state, user: undefined };
    default:
      return state;
  }
};
