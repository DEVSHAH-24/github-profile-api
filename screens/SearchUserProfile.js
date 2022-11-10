import React, { useState } from "react";
import { View } from "react-native";

import { Searchbar } from "react-native-paper";
import { appStyles } from "../styles/appStyles";

import { PublicRepos } from "../components/PublicRepos";
import { UserInfoCard } from "../components/UserInfoCard";
import { getUserData } from "../services/GithubApiService";

export const Main = () => {
  const [userData, setUserData] = useState({});

  const [search, setSearch] = useState("");

  const handleSearch = async (_search) => {
    const response = await getUserData(_search);
    try {
      if (response) {
        setUserData(response);
      } else if (response.message === "Not found") {
        //searched username does not exist
        alert("Username not found, please try a different username");
        setUserData({});
      } else {
        setUserData({});
      }
    } catch (error) {
      alert(error);
    }
  };

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
