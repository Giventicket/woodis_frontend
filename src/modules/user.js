import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../libs/api";
import createRequestSaga from "../libs/createRequestSaga";

const LOGIN = "user/LOGIN";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const GETUSER = "user/GETUSER";
const GETUSER_SUCCESS = "user/GETUSER_SUCCESS";
const SETUSER = "user/SETUSER";
const RESET = "user/RESET";

export const log_in = createAction(LOGIN, (id, password) => ({
  id,
  password,
}));
export const get_user = createAction(GETUSER);
export const set_user = createAction(SETUSER, user=>user);
export const reset = createAction(RESET);

const asyncLogin = createRequestSaga(LOGIN, api.asyncLogin);
const asyncGetUser = createRequestSaga(GETUSER, api.asyncGetUser);

export function* userSaga() {
  yield takeLatest(LOGIN, asyncLogin);
  yield takeLatest(GETUSER, asyncGetUser);
}

const initialState = {
  user: null,
};

const user = handleActions(
  {
    [RESET]: state => ({ user: null }),
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({ ...state, user }),
    [GETUSER_SUCCESS]: (state, { payload: user }) => ({ ...state, user }),
	[SETUSER]: (state, { payload: user }) => ({ ...state, user }),
  },
  initialState
);

export default user;
