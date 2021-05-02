import React from "react";
import { useEffect, useCallback } from "react";
import { Menu } from "../components";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const MenuContainer = ({ name }) => {
  const user = useSelector(state => state.user.user);
  const onClick = useCallback(
    e => {
      if (!user) {
        e.preventDefault();
        swal(`로그인 후에 서비스를 이용해주세요.`);
        return;
      }
    },
    [user]
  );
  return <Menu onClick={onClick} name={name} />;
};

export default React.memo(MenuContainer);
