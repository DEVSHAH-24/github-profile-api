import {
  SET_USER_DATA,
  CLEAR_USER_DATA,
  SET_REPO_DATA,
  CLEAR_REPO_DATA,
} from "../actions/GithubAPIActions";
const initialState = {
  userData: null,
  repoData: null,
};

export const githubApiReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userData: action.payload };

    case CLEAR_USER_DATA:
      return { ...state, userData: null };

    case SET_REPO_DATA:
      return { ...state, repoData: action.payload };

    case CLEAR_REPO_DATA:
      return { ...state, repoData: null };

    default:
      return state;
  }
};
