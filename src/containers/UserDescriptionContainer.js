import React from "react";
import { useCallback } from "react";
import { UserDescription } from "../components";
import { useDispatch } from "react-redux";
import { reset } from "../modules/user";

function getCookie(name){
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

function deleteCookie( name, path, domain ) {
  if( getCookie( name ) ) {
    document.cookie = name + "=" +
      ((path) ? ";path="+path:"")+
      ((domain)?";domain="+domain:"") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

const UserDescriptionContainer = ({ name }) => {
  const dispatch = useDispatch();
  const logout = useCallback(() => {dispatch(reset()); deleteCookie("user"); localStorage.clear();}, [dispatch]);

  return <UserDescription logout={logout} name={name} />;
};

export default React.memo(UserDescriptionContainer);
