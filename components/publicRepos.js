import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
function PublicRepos({ userData }) {
  const [repoData, setRepoData] = useState({});

  const getRepoData = async () => {
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
  };
  useEffect(() => {
    getRepoData();
  }, [userData]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {repoData == null ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={repoData}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Text style={[styles.textStyle]}>
                {item.name}
                {"\n"}
              </Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      )}
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
});
export default PublicRepos;
