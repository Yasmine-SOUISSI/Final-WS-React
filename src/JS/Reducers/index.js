import { combineReducers } from "redux";
import { usersReducer } from "./userReducer";
import { apiReducer } from "./apiReducer";
export const rootReducer = combineReducers({ usersReducer, apiReducer });
