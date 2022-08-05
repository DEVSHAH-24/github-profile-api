import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
//doubt - shall we listen to userData for changes?
function PublicRepos({ userData }) {
  console.log(userData.repos_url);
  const [repoData, setRepoData] = useState({});

  const getRepoData = async () => {
    // axios.get(gitHubUrl).then((response)=> {
    //   response.message !== "Not Found" ? setUserData(response) : console.log
    // })
    const response = await fetch(userData.repos_url);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
      setRepoData(jsonData);
      console.log(jsonData);
    } else if (repoData !== "") {
      console.log("Username does not exist");
    } else {
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
              <Text style={[styles.textStyle]} >
                {item.name}, {item.description}
              </Text>
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
    fontWeight: 200,
    
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#add8e6'
  },
});
export default PublicRepos;
