import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import UserInfoCard from "./Info";
import PublicRepos from "./publicRepos";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

function Main() {
  const [userData, setUserData] = useState({});

  const [currentName, setCurrentName] = useState("");
  var gitHubUrl = `https://api.github.com/users/${currentName}`;

  const getUserData = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
      setUserData(jsonData);
      console.log(jsonData);
    } else if (username !== "") {
      console.log("Username does not exist");
      setUserData({});
    } else {
      Alert.alert("Username not found", "Please try a different username");
      setUserData({});
    }
  };
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signingout");
        navigation.navigate("Login");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchLogout}>
        <Searchbar
          placeholder="Search"
          onChangeText={(e) => setCurrentName(e)}
          onIconPress={() => getUserData()}
        />
        <Button title="Logout" onPress={handleSignOut}></Button>
      </View>
      <View style={styles.container}>
        <UserInfoCard userData={userData} />
      </View>

      <View style={styles.container}>
        <Text style={styles.titleStyle}>Public repos</Text>
        <PublicRepos userData={userData} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 25,
  },
  searchLogout: {
    flexDirection: "row",
    alignItems: "space-between",
    padding: 20,
    alignContent: "space-between",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 20,
    color: "green",
  },
});
export default Main;
