import React from "react";
import { useEffect, useCallback } from "react";
import { Menu } from "../components";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const MenuContainer = ({ name, email }) => {
  const user = useSelector(state => state.user.user);
  const onClick1 = useCallback(
    e => {
      if (!user) {
        e.preventDefault();
        swal(`로그인 후에 서비스를 이용해주세요.`);
        return;
      }
    },
    [user]
  );
  const onClick2 = useCallback(
    e => {
      if (!user) {
        e.preventDefault();
        swal(`로그인 후에 서비스를 이용해주세요.`);
        return;
      }
      swal(
        `${user.email} 로 WOODIS의 메일이 발송되었습니다. WOODIS와 함께 우아한 금융서비스를 이용하길 바랍니다.`
      );
    },
    [user]
  );
  return (
    <Menu onClick1={onClick1} onClick2={onClick2} name={name} email={email} />
  );
};

export default React.memo(MenuContainer);
