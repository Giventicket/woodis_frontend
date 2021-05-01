import React from "react";
import { useEffect, useCallback } from "react";
import { LoginForm } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { change_id, change_password, reset } from "../modules/login";
import { log_in } from "../modules/user";
import swal from "sweetalert";

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { id, password } = useSelector(state => state.login);
  const onChangeId = useCallback(id => dispatch(change_id(id)), [dispatch]);
  const onChangePassword = useCallback(
    password => dispatch(change_password(password)),
    [dispatch]
  );
  const login = useCallback(() => {
    if (!id || !password) {
      swal(`아이디와 비밀번호를 입력해주세요.`);
      return;
    }
    dispatch(log_in(id, password));
  }, [dispatch, id, password]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <LoginForm
      onChangeId={onChangeId}
      onChangePassword={onChangePassword}
      login={login}
    />
  );
};

export default React.memo(LoginFormContainer);
