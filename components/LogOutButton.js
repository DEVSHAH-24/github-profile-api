import React, { Component } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const LogOutButton = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((e) => alert(e.message));
  };
  return <Button title="Logout" onPress={handleSignOut}></Button>;
};
export default LogOutButton;
