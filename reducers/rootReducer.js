import { loginReducers } from "./LoginReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  loginReducers,
});

export default rootReducer;
