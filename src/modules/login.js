import { createAction, handleActions } from "redux-actions";

const CHANGE_ID = "login/CHANGE_ID";
const CHANGE_PASSWORD = "login/CHANGE_PASSWORD";
const RESET = "login/RESET";

export const change_id = createAction(CHANGE_ID, id => id);
export const change_password = createAction(
  CHANGE_PASSWORD,
  password => password
);
export const reset = createAction(RESET);

const initialState = {
  id: null,
  password: null,
};

const login = handleActions(
  {
    [CHANGE_ID]: (state, { payload: id }) => ({ ...state, id }),
    [CHANGE_PASSWORD]: (state, { payload: password }) => ({
      ...state,
      password,
    }),
    [RESET]: state => initialState,
  },
  initialState
);

export default login;
