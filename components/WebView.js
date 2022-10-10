import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const WebViewComponent = ({ route, navigation }) => {
  const screenName = route.params;
  console.log(screenName);
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: screenName.uri }} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
export default WebViewComponent;
