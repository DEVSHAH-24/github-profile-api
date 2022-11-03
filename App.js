import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Main from "./screens/SearchUserProfile";
import LoginScreen from "./screens/LoginScreen";
import LogOutButton from "./components/LogOutButton";
import WebViewComponent from "./components/WebView";
import { Provider } from "react-redux";
import store from "./StoreFile";

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
