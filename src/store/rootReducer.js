import { combineReducers } from "redux";
import authSlice from "./auth.slice";
import counterReducer from "./counterSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  counter: counterReducer,
});
