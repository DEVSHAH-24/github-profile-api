import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";

function UserInfoCard({ userData }) {
  console.log(userData);
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri:
            userData?.avatar_url === undefined
              ? "https://reactnative.dev/img/tiny_logo.png"
              : userData.avatar_url,
        }}
      />
      {userData?.name === undefined ? (
        <Text style={styles.textStyle}>Name</Text>
      ) : userData.name != null ? (
        <Text style={styles.textStyle}>{userData.name}</Text>
      ) : (
        <Text
          style={[styles.textStyle, { fontStyle: "italic", fontWeight: "200" }]}
        >
          Name not available
        </Text>
      )}

      {userData?.location === undefined ? (
        <Text style={styles.subheadingTextStyle}>
          Location will appear here
        </Text>
      ) : userData.location !== null ? (
        <Text style={styles.subheadingTextStyle}>{userData.location}</Text>
      ) : null}

      {/* <Text style={styles.subheadingTextStyle}>
        {userData?.location === undefined
          ? "Location will appear here"
          : userData.location}
      </Text> */}

      <Text style={styles.subheadingTextStyle}>
        {userData?.login !== undefined
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
