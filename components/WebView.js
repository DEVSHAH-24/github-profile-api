import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WebViewComponent = ({ route, navigation }) => {
  const screenName = route.params;
  console.log(screenName);
  return <WebView source={{ uri: screenName.uri }} />;
};

export default WebViewComponent;
