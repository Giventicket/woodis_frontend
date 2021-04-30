import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import user from "./user";

const rootReducer = combineReducers({
  login,
  signup,
  user,
});

export default rootReducer;
