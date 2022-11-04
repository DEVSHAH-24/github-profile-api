import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { appStyles } from "../styles/appStyles";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, handleSignUp } from "../services/LoginService";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const gitHubImageURL =
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

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
        <TouchableOpacity
          onPress={() => handleLogin(email, password)(dispatch)}
          style={appStyles.button}
        >
          <Text style={[appStyles.buttonText]}>Login</Text>
        </TouchableOpacity>

        <View paddingVertical={5} />

        <TouchableOpacity
          onPress={() => handleSignUp(email, password)(dispatch)}
          style={appStyles.button}
        >
          <Text style={[appStyles.buttonText]}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
