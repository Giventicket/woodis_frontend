import React from "react";
import { useCallback } from "react";
import { UserDescription } from "../components";
import { useDispatch } from "react-redux";
import { reset } from "../modules/user";
import deleteCookie from "../libs/deleteCookie";

const UserDescriptionContainer = ({ name }) => {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(reset());
    deleteCookie("user");
    localStorage.clear();
  }, [dispatch]);

  return <UserDescription logout={logout} name={name} />;
};

export default React.memo(UserDescriptionContainer);
