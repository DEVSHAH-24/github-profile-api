import axios from "axios";

export const getRepoData = async (url) => {
  // to get the repositories of a particular username when searched, after getting user data
  try {
    const response = await axios.get(url);
    if (response?.data) {
      console.log(response.data);
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
  const gitHubUrl = `https://api.github.com/users/${keyword}`;

  try {
    if (keyword !== "") {
      const response = await axios(gitHubUrl);

      console.log(response.data);

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
