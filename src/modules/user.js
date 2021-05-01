import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../libs/api";
import createRequestSaga from "../libs/createRequestSaga";

const LOGIN = "user/LOGIN";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const GETUSER = "user/GETUSER";
const GETUSER_SUCCESS = "user/GETUSER_SUCCESS";
const SETUSER = "user/SETUSER";
const SETCURRENTACC = "user/SETCURRENTACC";
const RESET = "user/RESET";

export const log_in = createAction(LOGIN, (id, password) => ({
  id,
  password,
}));
export const get_user = createAction(GETUSER);
export const set_user = createAction(SETUSER, user => user);
export const reset = createAction(RESET);
export const set_currentAcc = createAction(SETCURRENTACC, index => index);

const asyncLogin = createRequestSaga(LOGIN, api.asyncLogin);
const asyncGetUser = createRequestSaga(GETUSER, api.asyncGetUser);

export function* userSaga() {
  yield takeLatest(LOGIN, asyncLogin);
  yield takeLatest(GETUSER, asyncGetUser);
}

const initialState = {
  user: null,
  currentAcc: null,
};

const user = handleActions(
  {
    [RESET]: state => initialState,
    [LOGIN_SUCCESS]: (state, { payload: user }) => {
      console.log(LOGIN_SUCCESS, user);
      return { ...state, user: user, currentAcc: user.accList[0] };
    },
    [GETUSER_SUCCESS]: (state, { payload: user }) => {
      console.log(GETUSER_SUCCESS, user);
      return { ...state, user: user, currentAcc: user.accList[0] };
    },
    [SETUSER]: (state, { payload: user }) => ({
      ...state,
      user,
      currentAcc: user.accList[0],
    }),
    [SETCURRENTACC]: (state, { payload: index }) => ({
      ...state,
      currentAcc: state.user.accList[index],
    }),
  },
  initialState
);

export default user;
