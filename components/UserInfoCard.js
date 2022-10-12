import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native";
import { appStyles } from "./styles/appStyles";

function UserInfoCard({ userData }) {
  console.log(userData);
  return (
    <View style={appStyles.userContainer}>
      <Image
        style={appStyles.stretch}
        source={{
          uri:
            userData?.avatar_url === undefined
              ? "https://reactnative.dev/img/tiny_logo.png"
              : userData.avatar_url,
        }}
      />
      {userData?.name === undefined ? (
        <Text style={appStyles.textStyle}>Name</Text>
      ) : userData.name != null ? (
        <Text style={appStyles.textStyle}>{userData.name}</Text>
      ) : (
        <Text
          style={[
            appStyles.textStyle,
            { fontStyle: "italic", fontWeight: "200" },
          ]}
        >
          Name not available
        </Text>
      )}

      {userData?.location === undefined ? (
        <Text style={appStyles.subheadingTextStyle}>
          Location will appear here
        </Text>
      ) : userData.location !== null ? (
        <Text style={appStyles.subheadingTextStyle}>{userData.location}</Text>
      ) : null}

      {/* <Text style={appStyles.subheadingTextStyle}>
        {userData?.location === undefined
          ? "Location will appear here"
          : userData.location}
      </Text> */}

      <Text style={appStyles.subheadingTextStyle}>
        {userData?.login !== undefined
          ? userData.hireable !== true
            ? "Not hireable"
            : "Hireable"
          : ""}
      </Text>
    </View>
  );
}

// const appStyles = StyleSheet.create({
//   stretch: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   textStyle: {
//     fontSize: 25,
//     fontWeight: "700",
//     paddingVertical: 20,
//   },
//   container: {
//     alignItems: "center",
//     padding: 35,
//   },
//   subheadingTextStyle: {
//     fontSize: 15,
//     fontWeight: "400",
//     paddingVertical: 5,
//   },
// });
export default UserInfoCard;
