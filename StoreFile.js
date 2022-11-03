import { combineReducers, configureStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = configureStore(rootReducer);

export default store;
