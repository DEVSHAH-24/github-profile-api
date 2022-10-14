import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "react-native";
import { auth } from "../firebase";

export const LogOutButton = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
        console.log(auth.currentUser);
      })
      .catch((e) => alert(e.message));
  };
  return (
    <Button testID="logout-btn" title="Logout" onPress={handleSignOut}></Button>
  );
};
export default LogOutButton;
