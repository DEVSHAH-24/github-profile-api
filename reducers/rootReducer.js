import { githubApiReducers } from "./GithubAPIReducers";
import { loginReducers } from "./LoginReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  githubApiReducers,
  loginReducers,
});

export default rootReducer;
