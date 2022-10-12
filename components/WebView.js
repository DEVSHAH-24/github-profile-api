import React from "react";
import { WebView } from "react-native-webview";

export const WebViewComponent = ({ route }) => {
  const screenName = route.params;
  return <WebView source={{ uri: screenName.uri }} />;
};

export default WebViewComponent;
