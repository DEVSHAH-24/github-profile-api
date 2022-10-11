import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WebViewComponent = ({ route, navigation }) => {
  const screenName = route.params;
  console.log(screenName);
  return <WebView source={{ uri: screenName.uri }} />;
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
