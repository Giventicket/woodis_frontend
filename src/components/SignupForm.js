import React from "react";
import { TextField, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFadeIn } from "../libs";

const useStyles = makeStyles(theme => ({
  form: { textAlign: "center" },
  input: {
    backgroundColor: "#E8F2FD",
    color: "#715F61",
  },
  signupButton: {
    backgroundColor: "#008CF0",
    "&:hover": {
      backgroundColor: "#008CE0",
    },
    color: "white",
  },
  cancelButton: {
    backgroundColor: "#DE0076",
    "&:hover": {
      backgroundColor: "#DE0066",
    },
    color: "white",
  },
}));

const SignupForm = function ({
  onChangeName,
  onChangeAgency,
  onChangePhone,
  onChangeEmail,
  onChangeId,
  onChangePassword,
  onChangePasswordConfirm,
}) {
  const classes = useStyles();
  const fadeIn = useFadeIn(0.5);

  return (
    <form className={classes.form} {...fadeIn}>
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="이름 입력"
        onChange={e => onChangeName(e.target.value)}
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="통신사 입력"
        onChange={e => onChangeAgency(e.target.value)}
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="전화번호 입력"
        onChange={e => onChangePhone(e.target.value)}
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="이메일 입력"
        onChange={e => onChangeEmail(e.target.value)}
      />
      <Box mt={2} />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="아이디 입력"
        onChange={e => onChangeId(e.target.value)}
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        type="password"
        placeholder="비밀번호 입력"
        onChange={e => onChangePassword(e.target.value)}
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        type="password"
        placeholder="비밀번호 확인"
        onChange={e => onChangePasswordConfirm(e.target.value)}
      />
      <Box mt={2} />
      <Box pl="42px">
        <Button
          variant="contained"
          className={classes.signupButton}
          type="submit"
        >
          회원가입 하기
        </Button>
        <Box component="span" ml={2} />
        <Button variant="contained" className={classes.cancelButton} href="/">
          취소
        </Button>
      </Box>
    </form>
  );
};
export default React.memo(SignupForm);
