import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../libs/api";
import createRequestSaga from "../libs/createRequestSaga";

const SIGNUP = "signup/SIGNUP";
const SIGNUP_SUCCESS = "signup/SIGNUP_SUCCESS";
const AUTH = "signup/AUTH";
const AUTH_SUCCESS = "signup/AUTH_SUCCESS";
const CHANGE_NAME = "signup/CHANGE_NAME";
const CHANGE_IDENTITY = "signup/CHANGE_IDENTITY";
const CHANGE_AGENCY = "signup/CHANGE_AGENCY";
const CHANGE_PHONE = "signup/CHANGE_PHONE";
const CHANGE_EMAIL = "signup/CHANGE_EMAIL";
const CHANGE_ID = "signup/CHANGE_ID";
const CHANGE_PASSWORD = "signup/CHANGE_PASSWORD";
const CHANGE_PASSWORDCONFIRM = "signup/CHANGE_PASSWORDCONFIRM";
const CHANGE_AUTHKEY = "signup/CHANGE_AUTHKEY";
const RESET = "signup/RESET";

export const sign_up = createAction(
  SIGNUP,
  (name, agency, phone, email, id, password, identity, authKey) => ({
    name,
    agency,
    phone,
    email,
    id,
    password,
    identity,
	authKey
  })
);
export const auth = createAction(AUTH, (name, agency, phone, identity) => ({name, agency, phone, identity}));


export const change_name = createAction(CHANGE_NAME, name => name);
export const change_identity = createAction(
  CHANGE_IDENTITY,
  identity => identity
);
export const change_agency = createAction(CHANGE_AGENCY, agency => agency);
export const change_phone = createAction(CHANGE_PHONE, phone => phone);
export const change_email = createAction(CHANGE_EMAIL, email => email);
export const change_id = createAction(CHANGE_ID, id => id);
export const change_password = createAction(
  CHANGE_PASSWORD,
  password => password
);
export const change_passwordConfirm = createAction(
  CHANGE_PASSWORDCONFIRM,
  passwordConfirm => passwordConfirm
);
export const change_authKey = createAction(
  CHANGE_AUTHKEY,
  authKey => authKey
);
export const reset = createAction(RESET);

const asyncSignupSaga = createRequestSaga(SIGNUP, api.asyncSignUp);
const asyncAuthSaga = createRequestSaga(AUTH, api.asyncAuth);

export function* signupSaga() {
  yield takeLatest(SIGNUP, asyncSignupSaga);
  yield takeLatest(AUTH, asyncAuthSaga);
}

const initialState = {
  name: null,
  agency: "1",
  phone: null,
  email: null,
  id: null,
  password: null,
  passwordConfirm: null,
  identity: null,
  authKey:null
};

const signup = handleActions(
  {
    [CHANGE_NAME]: (state, { payload: name }) => ({ ...state, name }),
    [CHANGE_AGENCY]: (state, { payload: agency }) => ({ ...state, agency }),
    [CHANGE_PHONE]: (state, { payload: phone }) => ({
      ...state,
      phone,
    }),
    [CHANGE_EMAIL]: (state, { payload: email }) => ({
      ...state,
      email,
    }),
    [CHANGE_ID]: (state, { payload: id }) => ({ ...state, id }),
    [CHANGE_PASSWORD]: (state, { payload: password }) => ({
      ...state,
      password,
    }),
    [CHANGE_PASSWORDCONFIRM]: (state, { payload: passwordConfirm }) => ({
      ...state,
      passwordConfirm,
    }),
    [CHANGE_IDENTITY]: (state, { payload: identity }) => ({
      ...state,
      identity,
    }),
	[CHANGE_AUTHKEY]: (state, { payload: authKey }) => ({
      ...state,
      authKey,
    }),
    [RESET]: state => initialState,
    [SIGNUP_SUCCESS]: state => state,
    [AUTH_SUCCESS]: (state, { payload: authKey }) => ({
      ...state,
      authKey,
    }),
  },
  initialState
);

export default signup;
