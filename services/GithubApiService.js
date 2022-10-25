import axios from "axios";
import { useDispatch } from "react-redux";
export const getRepoData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response) {
      const jsonData = response.json();
      // do something
    } else {
      // do something
    }
  } catch (error) {
    console.log(error);
  }
};
