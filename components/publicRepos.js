import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";
import WebViewComponent from "./WebView";
import { useNavigation } from "@react-navigation/native";

function PublicRepos({ userData }) {
  const navigation = useNavigation();

  const [repoData, setRepoData] = useState({});

  const getRepoData = async () => {
    console.log("this is", repoData);
    try {
      const response = await fetch(userData.repos_url);
      const jsonData = await response.json();
      if (jsonData && jsonData.message !== "Not Found") {
        setRepoData(jsonData);
        console.log(jsonData);
      } else if (repoData !== "") {
        console.log("Username does not exist");
      } else {
        console.log("case 3");
        setUserData({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userData?.repos_url) {
      getRepoData();
    }
  }, [userData]);

  return (
    <View style={{ flex: 1, paddingBottom: 1000 }}>
      <FlatList
        data={repoData}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("Webview", { uri: item.clone_url })
            }
          >
            <Text style={[styles.textStyle]}>
              {item.name}
              {"\n"}
            </Text>
            <Text style={styles.mutedText}>
              {item.language} {"\n"}
            </Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: "700",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#ddd8e6",
    borderRadius: 25,
  },
  mutedText: {
    fontWeight: "bold",
    color: "grey",
  },
});
export default PublicRepos;
