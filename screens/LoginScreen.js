import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-web";
import { auth } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((e) => alert(e.message));
  };

  const handleLogin = () => {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
        navigation.navigate("Home");

      })
      .catch((e) => alert(e.message));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.textStyle}>Welcome!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={
            handleLogin
          }
          style={styles.button}
        >
          <Text style={[styles.button, styles.buttonOutline]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={[styles.button, styles.buttonOutline]}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    width: "80%",
    
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent:'center',
    textAlign:'center'
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    alignItems: 'center'
  },
});
export default LoginScreen;
