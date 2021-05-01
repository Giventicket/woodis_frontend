import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import login from "./login";
import tranList, { tranListSaga } from "./tranList";
import signup, { signupSaga } from "./signup";
import user, { userSaga } from "./user";
import loading from "./loading";

const rootReducer = combineReducers({
  login,
  signup,
  user,
  loading,
  tranList,
});

export function* rootSaga() {
  yield all([signupSaga(), userSaga(), tranListSaga()]);
}

export default rootReducer;
