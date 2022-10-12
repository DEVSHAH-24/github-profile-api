import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Searchbar } from "react-native-paper";
import { appStyles } from "../components/styles/appStyles";
import PublicRepos from "../components/PublicRepos";
import UserInfoCard from "../components/UserInfoCard";

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
}
// const appStyles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     paddingHorizontal: 5,
//     flex: 1,
//   },
//   searchLogout: {
//     flexDirection: "row",
//     alignItems: "space-between",
//     padding: 10,
//     alignContent: "space-between",
//   },
//   titleStyle: {
//     fontSize: 20,
//     fontWeight: "500",
//     paddingVertical: 10,
//     color: "green",
//   },
// });
export default Main;
