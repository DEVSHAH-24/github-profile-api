import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../components/appStyles";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const gitHubImageURL =
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

  const handleSignUp = () => {
    //Validation checks for registration
    validateLogin(password, email)
      ? createUserWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user.email);
          })
          .catch((e) => alert(e.message))
      : null;
  };

  const handleLogin = () => {
    validateLogin(password, email)
      ? signInWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user.email);
            //  navigation.navigate("Home");
          })
          .catch((e) => alert(e.message))
      : null;
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validateLogin = (password, email) => {
    //regex validation for email

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("before nav");
        navigation.navigate("Home");
        console.log("after nav");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView
      style={appStyles.loginScreenContainer}
      behavior="padding"
    >
      <Image
        style={appStyles.stretch}
        source={{
          uri: gitHubImageURL,
        }}
      />
      <Text style={appStyles.textStyle}>Hello!</Text>
      <View style={appStyles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={appStyles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={appStyles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={appStyles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={appStyles.button}>
          <Text style={[appStyles.buttonText]}>Login</Text>
        </TouchableOpacity>

        <View paddingVertical={5}></View>

        <TouchableOpacity onPress={handleSignUp} style={appStyles.button}>
          <Text style={[appStyles.buttonText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// const appStyles = StyleSheet.create({
//   textStyle: {
//     fontSize: 25,
//     fontWeight: "700",
//     paddingVertical: 20,
//   },
//   stretch: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },

//   loginScreenContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//   },
//   inputContainer: {
//     width: "80%",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 2,
//     borderRadius: 10,
//     marginTop: 5,
//     height: 30,
//   },
//   button: {
//     backgroundColor: "#000ffa",
//     padding: 5,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     height: 50,
//     width: "80%",
//   },
//   buttonContainer: {
//     alignItems: "center",
//     marginTop: 50,
//     width: "100%",
//   },
//   buttonOutline: {
//     marginTop: 2,
//     borderColor: "#0782F9",
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16,
//     alignItems: "center",
//   },
// });
export default LoginScreen;
