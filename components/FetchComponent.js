import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useEffect, useState } from "react";
import SearchBarFcn from "./SearchBar";
import { Searchbar } from "react-native-paper";
import UserInfoCard from "./Info";


function Main() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  var gitHubUrl = `https://api.github.com/users/${username}`;

  const getUserData = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
      setUserData(jsonData);
      console.log(jsonData);
    } else if (username !== "") {
      console.log("Username does not exist");
    } else {
      setUserData({});
    }
  };
  useEffect(() => {
    getUserData();
  }, [username]);

  return (
    
<View>
  <Searchbar placeholder="Search" onChangeText={(text)=> setUsername(text)}>

  </Searchbar>
  <UserInfoCard userData={userData}></UserInfoCard>
    
    </View>

    
  );
}
export default Main;