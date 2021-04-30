import { createAction, handleActions } from "redux-actions";

const CHANGE_ID = "signup/CHANGE_ID";
const CHANGE_PASSWORD = "signup/CHANGE_PASSWORD";
const CHANGE_PASSWORDCONFIRM = "signup/CHANGE_PASSWORDCONFIRM";
const CHANGE_ACCOUNT = "signup/CHANGE_ACCOUNT";
const CHANGE_PHONE = "signup/CHANGE_PHONE";
const RESET = "signup/RESET";

export const change_id = createAction(CHANGE_ID, id => id);
export const change_password = createAction(
  CHANGE_PASSWORD,
  password => password
);
export const change_passwordConfirm = createAction(
  CHANGE_PASSWORDCONFIRM,
  passwordConfirm => passwordConfirm
);
export const change_account = createAction(CHANGE_ACCOUNT, account => account);
export const change_phone = createAction(CHANGE_PHONE, phone => phone);
export const reset = createAction(RESET);

const initialState = {
  id: "",
  password: "",
  passwordConfirm: "",
  account: "",
  phone: "",
};

const signup = handleActions(
  {
    [CHANGE_ID]: (state, { payload: id }) => ({ ...state, id }),
    [CHANGE_PASSWORD]: (state, { payload: password }) => ({
      ...state,
      password,
    }),
    [CHANGE_PASSWORDCONFIRM]: (state, { payload: passwordConfirm }) => ({
      ...state,
      passwordConfirm,
    }),
    [CHANGE_ACCOUNT]: (state, { payload: account }) => ({
      ...state,
      account,
    }),
    [CHANGE_PHONE]: (state, { payload: phone }) => ({
      ...state,
      phone,
    }),
    [RESET]: state => ({ id: "", password: "" }),
  },
  initialState
);

export default signup;
