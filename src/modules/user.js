import { createAction, handleActions } from "redux-actions";

const CHANGE_USER = "user/CHANGE_USER";
const CHANGE_TOKEN = "user/CHANGE_TOKEN";
const RESET = "user/RESET";

export const change_user = createAction(CHANGE_USER, user => user);
export const change_token = createAction(CHANGE_TOKEN, token => token);
export const reset = createAction(RESET);

/*
const loginState = {
  user: {
    userName: "서준표",
    phone: "01081914070",
    email: "jpseo99@gmail.com",
    userID: "서준표",
    accountList: ["123123890-12379812-1238123"],
  },
  token: "not null",
};
*/

const initialState = {
  user: null,
  token: null,
};

const user = handleActions(
  {
    [CHANGE_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHANGE_TOKEN]: (state, { payload: token }) => ({
      ...state,
      token,
    }),
    [RESET]: state => ({ user: null, token: null }),
  },
  initialState
);

export default user;
