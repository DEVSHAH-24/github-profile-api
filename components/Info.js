import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";

function UserInfoCard({ userData }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri:
            userData.avatar_url == null
              ? "https://reactnative.dev/img/tiny_logo.png"
              : userData.avatar_url,
        }}
      />
      <Text style={styles.textStyle}>
        {userData.name != null ? userData.name : "Name"}
      </Text>
      <Text>
        {userData.login == null ? "User ID will appear here" : userData.login}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
    padding: 35,
  },
});
export default UserInfoCard;
