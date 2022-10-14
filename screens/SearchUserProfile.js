import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Searchbar } from "react-native-paper";
import { appStyles } from "../styles/appStyles";
import PublicRepos from "../components/PublicRepos";
import UserInfoCard from "../components/UserInfoCard";

const Main = () => {
  const [userData, setUserData] = useState({});

  const [currentName, setCurrentName] = useState("");
  var gitHubUrl = `https://api.github.com/users/${currentName}`;

  const getUserData = async () => {
    try {
      if (currentName !== "") {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        if (jsonData && jsonData.message !== "Not Found") {
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
      alert(error);
      console.log(error, "error msg");
    }
  };

  return (
    <View style={appStyles.container}>
      <View style={appStyles.searchLogout}>
        <Searchbar
          placeholder="Search"
          onChangeText={(e) => setCurrentName(e)}
          onIconPress={() => getUserData()}
        />
      </View>
      <View>
        <UserInfoCard userData={userData} />
      </View>

      <PublicRepos userData={userData} />
    </View>
  );
};

export default Main;
