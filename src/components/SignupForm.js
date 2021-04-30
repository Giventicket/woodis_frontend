import React from "react";
import { TextField, Box, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const SignupForm = function ({ onChangeId, onChangePassword, onChangePasswordConfirm, onChangeAccount, onChangePhone }) {
  const classes = useStyles();
  return (
    <form className={classes.form}>
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
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="계좌번호 입력"
		onChange={e => onChangeAccount(e.target.value)}
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
