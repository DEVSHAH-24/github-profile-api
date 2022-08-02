import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

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
    <SearchBar username={() => setUsername}/>
    </View>

    
  );
}
export default Main;