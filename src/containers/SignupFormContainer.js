import React from "react";
import { useEffect, useCallback } from "react";
import { SignupForm } from "../components";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import checkPhone from "../libs/checkPhone";
import checkEmail from "../libs/checkEmail";
import checkIdentity from "../libs/checkIdentity";
import {
  change_name,
  change_agency,
  change_phone,
  change_email,
  change_id,
  change_password,
  change_passwordConfirm,
  change_identity,
  sign_up,
  auth,
  reset,
} from "../modules/signup";
import axios from "axios";


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
    identity,
	authKey
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
  const onChangeIdentity = useCallback(
    identity => dispatch(change_identity(identity)),
    [dispatch]
  );
  const onClickAuth = useCallback(
    (e) => {
		if(!agency || !name || !phone || !identity){
			console.log(agency, name, phone, identity);
			swal("본인인증에 필요한 상기 데이터 값을 입력해주세요.");
			return;
		}
		if (!checkPhone(phone)) {
			swal("휴대전화를 형식에 알맞게 입력해주세요.");
			return;
		}
		if (!checkIdentity(identity)) {
			swal("주민등록번호를 올바르게 입력해주세요.");
			return;
		}
		dispatch(auth(name, agency, phone, identity));
		},
    [dispatch, agency, name, phone, identity, auth]
  );

  const signup = useCallback(() => {
	  if(!authKey){
		  swal("본인 인증을 완료해주세요.");
      return;
	  }
    if (
      !name ||
      !agency ||
      !phone ||
      !email ||
      !password ||
      !passwordConfirm ||
      !identity
    ) {
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
    if (!checkIdentity(identity)) {
      swal("주민등록번호를 올바르게 입력해주세요.");
      return;
    }
    if (password === passwordConfirm) {
      dispatch(sign_up(name, agency, phone, email, id, password, identity, authKey));
      return;
    } else swal("비밀번호를 다시 확인해주세요.");
  }, [
    dispatch,
    name,
    agency,
    phone,
    email,
    id,
    password,
    passwordConfirm,
    identity,
  ]);

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
      onChangeIdentity={onChangeIdentity}
      onClickAuth={onClickAuth}
	  authKey={authKey}
    />
  );
};

export default React.memo(SignupFormContainer);
