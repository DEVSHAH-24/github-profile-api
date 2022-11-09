import React from "react";
import { useState } from "react";
import { View } from "react-native";

import { Searchbar } from "react-native-paper";
import { appStyles } from "../styles/appStyles";

import { PublicRepos } from "../components/PublicRepos";
import { UserInfoCard } from "../components/UserInfoCard";
import store from "../StoreFile";
import { settingRepoData, settingUserData } from "../actions/GithubAPIActions";
import { getUserData } from "../services/GithubApiService";
import { useSelector } from "react-redux";

export const Main = () => {
  const [userData, setUserData] = useState({});

  const [search, setSearch] = useState("");

  const handleSearch = async (_search) => {
    const response = await getUserData(_search);

    if (response) {
      setUserData(response);
    } else {
      setUserData({});
    }
  };

  // const getUserData = async () => {
  //   try {
  //     if (currentName !== "") {
  //       const response = await fetch(gitHubUrl);
  //       const jsonData = await response.json();
  //       if (jsonData && jsonData.message !== "Not Found") {
  //         setUserData(jsonData);
  //         console.log(jsonData);
  //       } else if (jsonData.message === "Not found") {
  //         alert("Username not found", "Please try a different username");

  //         console.log("Username does not exist");
  //         setUserData({});
  //       } else {
  //         alert("Username not found", "Please try a different username");
  //         setUserData({});
  //       }
  //     }
  //   } catch (error) {
  //     //alert(error);
  //     //  console.log(error, "error msg");
  //   }
  // };

  return (
    <View style={appStyles.container}>
      <View style={appStyles.searchLogout}>
        <Searchbar
          testID="searchbar"
          placeholder="Search"
          onChangeText={(e) => setSearch(e)}
          onIconPress={() => handleSearch(search)}
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
