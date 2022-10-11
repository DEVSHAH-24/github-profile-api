import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import UserInfoCard from "./UserInfoCard";
import PublicRepos from "./PublicRepos";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

function Main() {
  const [userData, setUserData] = useState({});

  const [currentName, setCurrentName] = useState("");
  var gitHubUrl = `https://api.github.com/users/${currentName}`;

  const getUserData = async () => {
    try {
      if (currentName !== "") {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        if (jsonData && jsonData.message !== "Not Found") {
          // CHECK THE REDUNDANCY HERE
          setUserData(jsonData);
          console.log(jsonData);
        } else if (jsonData.message === "Not found") {
          alert("Username not found", "Please try a different username");

          console.log("Username does not exist");
          setUserData({});
        } else {
          alert("Username not found", "Please try a different username");
          setUserData({});
        }
      }
    } catch (error) {
      console.log(error, "error msg");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchLogout}>
        <Searchbar
          placeholder="Search"
          onChangeText={(e) => setCurrentName(e)}
          onIconPress={() => getUserData()}
        />
      </View>
      <View style={styles.container}>
        <UserInfoCard userData={userData} />
      </View>

      <View style={styles.container}>
        <Text style={styles.titleStyle}>Public repositories</Text>
        <PublicRepos userData={userData} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 5,
  },
  searchLogout: {
    flexDirection: "row",
    alignItems: "space-between",
    padding: 10,
    alignContent: "space-between",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10,
    color: "green",
  },
});
export default Main;
