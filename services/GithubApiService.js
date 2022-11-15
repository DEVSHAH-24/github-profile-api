import axios from "axios";
import { gitHubUrl } from "../assets/Constants";

export const getRepoData = async (url) => {
  // to get the repositories of a particular username when searched, after getting user data
  try {
    const response = await axios.get(url);
    if (response?.data) {
      return response.data;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (keyword) => {
  // to get user data based on the username typed
  const keywordUrl = gitHubUrl + "/" + keyword;

  try {
    if (keyword !== "") {
      const response = await axios(keywordUrl);

      if (response?.data) {
        return response.data;
      } else {
        return undefined;
      }
    }
    throw Error();
  } catch (error) {
    alert(error);
  }
};
