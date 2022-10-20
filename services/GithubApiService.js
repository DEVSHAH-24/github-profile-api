import axios from "axios";
export const getRepoData = async (url) => {
  try {
    const response = await axios.get(url);

    if (response) {
      // do something
    } else {
      // do something
    }
  } catch (error) {
    console.log(error);
  }
};
