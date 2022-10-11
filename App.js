import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Main from "./components/SearchUserProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import { Appbar } from "react-native-paper";
import { signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { useNavigation } from "@react-navigation/native";
import LogOutButton from "./components/LogOutButton";
import WebViewComponent from "./components/WebView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            headerLeft: () => <View />,
            headerRight: () => <LogOutButton />,
          }}
        />
        <Stack.Screen
          options={{}}
          name="Webview"
          component={WebViewComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
