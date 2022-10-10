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
      <Text style={styles.subheadingTextStyle}>
        {userData.login == null
          ? "User ID will appear here"
          : userData.location}
      </Text>
      <Text style={styles.subheadingTextStyle}>
        {userData.login != null
          ? userData.hireable !== true
            ? "Not hireable"
            : "Hireable"
          : ""}
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
  subheadingTextStyle: {
    fontSize: 15,
    fontWeight: "400",
    paddingVertical: 5,
  },
});
export default UserInfoCard;
