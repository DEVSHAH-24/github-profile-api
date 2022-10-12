import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { appStyles } from "../styles/appStyles";

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
    <View style={appStyles.container}>
      <Text style={appStyles.titleStyle}>
        Public repositories: {repoData.length}
      </Text>
      <FlatList
        data={repoData}
        scrollEnabled={true}
        // scrollToOverflowEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={appStyles.item}
            onPress={() =>
              navigation.navigate("Webview", { uri: item.clone_url })
            }
          >
            <Text style={[appStyles.itemTextStyle]}>
              {item.name}
              {"\n"}
            </Text>
            <Text style={appStyles.mutedText}>
              {item.language} {"\n"}
            </Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default PublicRepos;
