import React from "react";
import { useEffect, useCallback } from "react";
import { SignupForm } from "../components";
import { useDispatch } from "react-redux";
import {
  change_id,
  change_password,
  change_passwordConfirm,
  change_account,
  change_phone,
  reset,
} from "../modules/signup";

const SignupFormContainer = () => {
  const dispatch = useDispatch();
  const onChangeId = useCallback(id => dispatch(change_id(id)), [dispatch]);
  const onChangePassword = useCallback(
    password => dispatch(change_password(password)),
    [dispatch]
  );
  const onChangePasswordConfirm = useCallback(
    passwordConfirm => dispatch(change_passwordConfirm(passwordConfirm)),
    [dispatch]
  );
  const onChangeAccount = useCallback(
	 account => dispatch(change_account(account)),
	[dispatch]
  );
  const onChangePhone = useCallback(
	phone => dispatch(change_phone(phone)),
	[dispatch]
  );
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <SignupForm onChangeId={onChangeId} onChangePassword={onChangePassword} onChangePasswordConfirm={onChangePasswordConfirm} onChangeAccount={onChangeAccount} onChangePhone={onChangePhone} />
  );
};

export default React.memo(SignupFormContainer);
