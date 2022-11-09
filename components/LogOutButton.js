import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { handleSignOut } from "../services/LoginService";

export const LogOutButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignOutBtn = () => {
    handleSignOut(dispatch);
    navigation.navigate("Login");
  };

  return (
    <Button
      testID="logout-btn"
      title="Logout"
      onPress={handleSignOutBtn}
    ></Button>
  );
};
export default LogOutButton;
