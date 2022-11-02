import axios from "axios";
import { settingRepoData, clearingRepoData } from "../actions/GithubAPIActions";

export const getRepoData = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    if (response) {
      const jsonData = response.json();
      dispatch(settingRepoData(jsonData));
      // do something
    } else {
      // do something
    }
  } catch (error) {
    console.log(error);
  }
};
