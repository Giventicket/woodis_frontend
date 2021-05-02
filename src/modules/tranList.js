import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../libs/api";
import createRequestSaga from "../libs/createRequestSaga";

const GET_TRANLIST = "tranList/GET_TRANLIST";
const GET_TRANLIST_SUCCESS = "tranList/GET_TRANLIST_SUCCESS";
const RESET = "tranList/RESET";

export const get_tranList = createAction(GET_TRANLIST, (year, month, acc) => ({
  year,
  month,
  acc,
}));
export const reset = createAction(RESET);

export const asyncGetTransList = createRequestSaga(
  GET_TRANLIST,
  api.asyncGetTranList
);

export function* tranListSaga() {
  yield takeLatest(GET_TRANLIST, asyncGetTransList);
}

const initialState = {
  tranList: null,
};

const tranList = handleActions(
  {
    [GET_TRANLIST_SUCCESS]: (state, { payload: tranList }) => {
      console.log(GET_TRANLIST_SUCCESS, tranList);
      return {
        ...state,
        tranList,
      };
    },
    [RESET]: state => initialState,
  },
  initialState
);

export default tranList;
