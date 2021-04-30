import { createAction, handleActions } from "redux-actions";

const CHANGE_NAME = "signup/CHANGE_NAME";
const CHANGE_AGENCY = "signup/CHANGE_AGENCY";
const CHANGE_PHONE = "signup/CHANGE_PHONE";
const CHANGE_EMAIL = "signup/CHANGE_EMAIL";
const CHANGE_ID = "signup/CHANGE_ID";
const CHANGE_PASSWORD = "signup/CHANGE_PASSWORD";
const CHANGE_PASSWORDCONFIRM = "signup/CHANGE_PASSWORDCONFIRM";
const RESET = "signup/RESET";

export const change_name = createAction(CHANGE_NAME, name => name);
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
export const reset = createAction(RESET);

const initialState = {
  name: null,
  phone: null,
  email: null,
  id: null,
  password: null,
  passwordConfirm: null,
};

const signup = handleActions(
  {
    [CHANGE_NAME]: (state, { payload: name }) => ({ ...state, name }),
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
    [RESET]: state => ({
      name: null,
      phone: null,
      email: null,
      id: null,
      password: null,
      passwordConfirm: null,
    }),
  },
  initialState
);

export default signup;
