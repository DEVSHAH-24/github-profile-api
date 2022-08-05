import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native-web";

function UserInfoCard({ userData }) {
  return (
    <View>
      <View>
      <Image
          style={styles.stretch}
          source={{
            uri: userData.avatar_url == null ? "https://reactnative.dev/img/tiny_logo.png" : userData.avatar_url,
          }}
        />
        <Text>{userData.name != null ? userData.name : "Name"}</Text>
        <Text>
          {userData.login == null
            ? "Login ID will appear here"
            : userData.login}
        </Text>

       
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50,
  },
});
export default UserInfoCard;
