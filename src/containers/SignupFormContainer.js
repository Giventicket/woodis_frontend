import React from "react";
import { useEffect, useCallback } from "react";
import { SignupForm } from "../components";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import checkPhone from "../libs/checkPhone";
import checkEmail from "../libs/checkEmail";
import {
  change_name,
  change_agency,
  change_phone,
  change_email,
  change_id,
  change_password,
  change_passwordConfirm,
  sign_up,
  reset,
} from "../modules/signup";

const SignupFormContainer = () => {
  const dispatch = useDispatch();
  const {
    name,
    agency,
    phone,
    email,
    id,
    password,
    passwordConfirm,
  } = useSelector(state => state.signup);
  const onChangeName = useCallback(name => dispatch(change_name(name)), [
    dispatch,
  ]);
  const onChangeAgency = useCallback(
    agency => dispatch(change_agency(agency)),
    [dispatch]
  );
  const onChangePhone = useCallback(phone => dispatch(change_phone(phone)), [
    dispatch,
  ]);
  const onChangeEmail = useCallback(email => dispatch(change_email(email)), [
    dispatch,
  ]);
  const onChangeId = useCallback(id => dispatch(change_id(id)), [dispatch]);
  const onChangePassword = useCallback(
    password => dispatch(change_password(password)),
    [dispatch]
  );
  const onChangePasswordConfirm = useCallback(
    passwordConfirm => dispatch(change_passwordConfirm(passwordConfirm)),
    [dispatch]
  );

  const signup = useCallback(() => {
    if (!name || !agency || !phone || !email || !password || !passwordConfirm) {
      swal("회원가입에 필요한 모든 항목을 입력해주세요.");
      return;
    }
    if (!checkEmail(email)) {
      swal("이메일을 형식에 알맞게 입력해주세요.");
      return;
    }
    if (!checkPhone(phone)) {
      swal("휴대전화를 형식에 알맞게 입력해주세요.");
      return;
    }
    if (password === passwordConfirm) {
      dispatch(sign_up(name, agency, phone, email, id, password));
      return;
    } else swal("비밀번호를 다시 확인해주세요.");
  }, [dispatch, name, agency, phone, email, id, password, passwordConfirm]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <SignupForm
      onChangeName={onChangeName}
      onChangeAgency={onChangeAgency}
      onChangePhone={onChangePhone}
      onChangeEmail={onChangeEmail}
      onChangeId={onChangeId}
      onChangePassword={onChangePassword}
      onChangePasswordConfirm={onChangePasswordConfirm}
      signup={signup}
    />
  );
};

export default React.memo(SignupFormContainer);
