import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  handleLoginData,
  handleRegisterData,
  handleLogOut,
} from "../actions/LoginActions";
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
          console.log(user);
          dispatch(handleRegisterData(user));
        })
        .catch((e) => alert(e.message))
    : null;
};

export const handleLogin = (email, password) => async (dispatch) => {
  validateLogin(password, email)
    ? signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user.uid;
          // console.log(user);

          dispatch(handleLoginData(user));
          //  navigation.navigate("Home");
        })
        .catch((e) => alert(e.message))
    : null;
};

export const handleSignOut = async (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch(handleLogOut());
    })
    .catch((e) => alert(e.message));
};
