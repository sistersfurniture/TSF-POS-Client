import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import logger from "redux-logger";
import promiseReducer from "../reducers/promiseReducer";

// conbine reducers here
const reducers = combineReducers({
  user: userReducer,
  promise: promiseReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (gDM) => gDM().concat(logger),
});

export type RootState = ReturnType<typeof reducers>;
export default store;