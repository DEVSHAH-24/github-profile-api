import axios from "axios";
import { settingRepoData, clearingRepoData } from "../actions/GithubAPIActions";

export const getRepoData = (url) => async (dispatch) => {
  // to get the repositories of a particular username when searched, after getting user data
  try {
    const response = await axios.get(url);
    if (response) {
      console.log("this is response - ", response);
      dispatch(settingRepoData(response));
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = (keyword = async () => {
  // to get user data based on the username typed
  var gitHubUrl = `https://api.github.com/users/${keyword}`;

  try {
    if (keyword !== "") {
      const response = await axios(gitHubUrl);

      if (response && response.message !== "Not Found") {
        //body
      } else if (jsonData.message === "Not found") {
        //else if
        alert("Username not found", "Please try a different username");

        console.log("Username does not exist");
      } else {
        //else
        alert("Username not found", "Please try a different username");
      }
    }
  } catch (error) {
    alert(error);
  }
});
