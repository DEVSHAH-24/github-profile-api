import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { settingUserData } from "../actions/GithubAPIActions";
import { auth } from "../firebase";

const validateEmail = (email) => {
  //regex validation for email

  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateLogin = (password, email) => {
  //email and password check (local)

  if (!validateEmail(email)) {
    alert("Please check your email input");
    return false;
  } else if (password.length < 6) {
    alert("Password should be of atleast 6 characters");
    return false;
  } else if (password.includes(" ")) {
    alert("Password should not contain empty spaces");
    return false;
  } else {
    return true;
  }
};

export const handleSignUp = (email, password) => async (dispatch) => {
  validateLogin(password, email)
    ? createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          dispatch(settingUserData(user));
        })
        .catch((e) => alert(e.message))
    : null;
};

export const handleLogin = (email, password) => {
  validateLogin(password, email)
    ? signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          dispatch(settingUserData(user));
          //  navigation.navigate("Home");
        })
        .catch((e) => alert(e.message))
    : null;
};
