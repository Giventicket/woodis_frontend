import React from "react";
import { useEffect, useCallback } from "react";
import { SignupForm } from "../components";
import { useDispatch } from "react-redux";
import {
  change_name,
  change_phone,
  change_email,
  change_id,
  change_password,
  change_passwordConfirm,
  reset,
} from "../modules/signup";

const SignupFormContainer = () => {
  const dispatch = useDispatch();
  const onChangeName = useCallback(
    name => dispatch(change_name(name)),
    [dispatch]
  );
  const onChangePhone = useCallback(
	phone => dispatch(change_phone(phone)),
	[dispatch]
  );
  const onChangeEmail = useCallback(
	email => dispatch(change_email(email)),
	[dispatch]
  );
  const onChangeId = useCallback(id => dispatch(change_id(id)), [dispatch]);
  const onChangePassword = useCallback(
    password => dispatch(change_password(password)),
    [dispatch]
  );
  const onChangePasswordConfirm = useCallback(
    passwordConfirm => dispatch(change_passwordConfirm(passwordConfirm)),
    [dispatch]
  );
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <SignupForm onChangeName={onChangeName} onChangePhone={onChangePhone}  onChangeEmail={onChangeEmail} onChangeId={onChangeId} onChangePassword={onChangePassword} onChangePasswordConfirm={onChangePasswordConfirm}/>
  );
};

export default React.memo(SignupFormContainer);
