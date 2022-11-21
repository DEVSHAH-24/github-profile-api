import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { getRepoData } from "../services/GithubApiService";
import { appStyles } from "../styles/appStyles";
export function PublicRepos({ userData }) {
  const navigation = useNavigation();

  const [repoData, setRepoData] = useState({});

  const fetchRepos = async () => {
    if (userData?.repos_url) {
      const repos = await getRepoData(userData.repos_url);
      setRepoData(repos);
    }
  };

  useEffect(() => {
    console.log("this is", userData);
    fetchRepos();
  }, [userData]);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.titleStyle}>
        Public repositories: {repoData.length}
      </Text>
      <FlatList
        testID="flatlist"
        data={repoData}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        initialNumToRender={8}
        renderItem={({ item }) => (
          <TouchableOpacity
            testID="webview"
            style={appStyles.item}
            onPress={() =>
              navigation.navigate("Webview", { uri: item.clone_url })
            }
          >
            <Text style={[appStyles.itemTextStyle]}>{item.name}</Text>
            <Text style={appStyles.mutedText}>{item.language}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default PublicRepos;
