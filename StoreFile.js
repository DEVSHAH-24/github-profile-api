import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import rootReducer from "./reducers/rootReducer";

const store = configureStore({ reducer: rootReducer });

export default store;
