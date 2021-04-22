import { combineReducers } from "redux";
import AdminReducer from "./reducers/AdminReducer";
import AuthReducer from "./reducers/AuthReducer";
import ChatReducer from "./reducers/ChatReducer";
import filesReducer from "./reducers/filesReducer";
import MessageBarReducer from "./reducers/MessageBarReducer";
const createReducer = (asyncReducers) =>
  combineReducers({
    MessageBar: MessageBarReducer,
    Auth: AuthReducer,
    Chat: ChatReducer,
    admin: AdminReducer,
    files: filesReducer,
    ...asyncReducers,
  });

export default createReducer;
