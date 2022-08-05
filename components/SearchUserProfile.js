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
import axios from "axios";
import PublicRepos from "./publicRepos";


function Main() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  var gitHubUrl = `https://api.github.com/users/${username}`;

  const getUserData = async () => {
    // axios.get(gitHubUrl).then((response)=> {
    //   response.message !== "Not Found" ? setUserData(response) : console.log
    // })
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
  // const onChangeSearch = query => setUsername(query);

  return (
    <View>
      <View style={styles.container}>
        <Searchbar placeholder="Search" onChangeText={(e) => setUsername(e)} />
        <Button title="Logout"></Button>
      </View>
      <View>
        <UserInfoCard userData={userData} />
        <View>
          <Text>Public repos</Text>
          <PublicRepos userData = {userData}/>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // outerContainer: {
  //   backgroundColor: "grey",
  // },
  container: {
    flexDirection: "horizontal",
    
    
  },
});
export default Main;
