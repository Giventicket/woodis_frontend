import { combineReducers } from "redux";
import login from "./login";
import signup from "./signup";
import user from "./user";
import loading from "./loading";

const rootReducer = combineReducers({
  login,
  signup,
  user,
  loading,
});

export default rootReducer;
