import React from "react";
import { useCallback } from "react";
import { UserDescription } from "../components";
import { useDispatch } from "react-redux";
import { reset } from "../modules/user";
import deleteCookie from "../libs/deleteCookie";
import { withRouter } from "react-router-dom";

const UserDescriptionContainer = ({ name, history }) => {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    deleteCookie("user");
    localStorage.clear();
    dispatch(reset());
    setTimeout(() => history.push("/"), 500);
  }, [dispatch, history]);

  return <UserDescription logout={logout} name={name} />;
};

export default React.memo(withRouter(UserDescriptionContainer));
