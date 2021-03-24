import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import MessageBarReducer from "./reducers/MessageBarReducer";
const createReducer = (asyncReducers) =>
  combineReducers({
    MessageBar: MessageBarReducer,
    Auth: AuthReducer,
    ...asyncReducers,
  });

export default createReducer;
