import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Main from "./components/SearchUserProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyClzkXRH_mOI-WyKvF7h3cSyQ-CLutaI7c",
  authDomain: "github-api-66ce7.firebaseapp.com",
  projectId: "github-api-66ce7",
  storageBucket: "github-api-66ce7.appspot.com",
  messagingSenderId: "708508000411",
  appId: "1:708508000411:web:47c652ef87701f9289e63e",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0fa",
    alignItems: "center",
    justifyContent: "center",
  },
  outerContainer: {},
});
