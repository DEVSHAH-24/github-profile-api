import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const WebViewComponent = (uri) => {
  return (
    <View>
      <WebView source={{ uri: uri }} />
    </View>
  );
};
export default WebViewComponent;
