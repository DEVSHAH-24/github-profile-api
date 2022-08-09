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
//import { SearchBar } from 'react-native-elements';

import SearchBar from "react-native-searchbar";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

function Main() {
  const [userData, setUserData] = useState({});

  const [currentName, setCurrentName] = useState("");
  var gitHubUrl = `https://api.github.com/users/${currentName}`;

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
      setUserData({});
    } else {
      setUserData({});
    }
  };
  // useEffect(() => {
  // }, [username]);
  // const onChangeSearch = query => setUsername(query);
  const navigation = useNavigation();
  const handleSignOut=()=> {
    signOut(auth).then(()=>{
      console.log('signingout')
      navigation.navigate('Login');
    }).catch(e => alert(e.message))
  }


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
  // outerContainer: {
  //   backgroundColor: "grey",
  // },
  container: {
    //  flexDirection: "horizontal",
    alignItems: "center",
  },
  searchLogout: {
    flexDirection: "row",
    alignItems: "flex-end",
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
