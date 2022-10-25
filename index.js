import { registerRootComponent } from "expo";
import { LogBox } from "react-native";
import { Provider } from "react-redux";

import configureStore from "./store";
import App from "./App";
const store = configureStore();

const reduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(reduxApp);
LogBox.ignoreAllLogs();
