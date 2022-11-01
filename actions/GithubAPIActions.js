export const SET_USER_DATA = "SET_USER_DATA";
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";
export const SET_REPO_DATA = "SET_REPO_DATA";
export const CLEAR_REPO_DATA = "CLEAR_REPO_DATA";

export function settingUserData(userData) {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
}

export function clearingUserData(userData) {
  return {
    type: CLEAR_USER_DATA,
    payload: userData,
  };
}

export function clearingRepoData(repoData) {
  return {
    type: CLEAR_REPO_DATA,
    payload: repoData,
  };
}

export function settingRepoData(repoData) {
  return {
    type: SET_REPO_DATA,
    payload: repoData,
  };
}
