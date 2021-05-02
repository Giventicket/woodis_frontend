import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../libs/api";
import createRequestSaga from "../libs/createRequestSaga";

const GET_TRANLIST = "tranList/GET_TRANLIST";
const GET_TRANLIST_SUCCESS = "tranList/GET_TRANLIST_SUCCESS";
const GET_ANOTHER_TRANLIST = "tranList/GET_ANOTHER_TRANLIST";
const GET_ANOTHER_TRANLIST_SUCCESS = "tranList/GET_ANOTHER_TRANLIST_SUCCESS";
const RESET = "tranList/RESET";

export const get_tranList = createAction(GET_TRANLIST, (year, month, acc) => ({
  year,
  month,
  acc,
}));
export const get_another_tranList = createAction(
  GET_ANOTHER_TRANLIST,
  (year, month, acc, code) => ({
    year,
    month,
    acc,
    code,
  })
);
export const reset = createAction(RESET);

export const asyncGetTransList = createRequestSaga(
  GET_TRANLIST,
  api.asyncGetTranList
);
export const asyncGetAnotherTransList = createRequestSaga(
  GET_ANOTHER_TRANLIST,
  api.asyncGetDiscount
);

export function* tranListSaga() {
  yield takeLatest(GET_TRANLIST, asyncGetTransList);
  yield takeLatest(GET_ANOTHER_TRANLIST, asyncGetAnotherTransList);
}

const initialState = {
  tranList: null,
  anotherTranList: null,
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
    [GET_ANOTHER_TRANLIST_SUCCESS]: (state, { payload: anotherTranList }) => {
      console.log(GET_ANOTHER_TRANLIST_SUCCESS, anotherTranList);
      return {
        ...state,
        anotherTranList,
      };
    },
    [RESET]: state => initialState,
  },
  initialState
);

export default tranList;
