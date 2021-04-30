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

const SignupForm = function ({ onChangeId, onChangePassword }) {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="아이디 입력"
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        type="password"
        placeholder="비밀번호 입력"
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        type="password"
        placeholder="비밀번호 확인"
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="계좌번호 입력"
      />
      <Box mt={2} />
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="전화번호 입력"
      />
      <Box mt={2} />
      <Box pl="84px">
        <Button variant="contained" className={classes.signupButton}>
          회원가입
        </Button>
        <Box component="span" ml={2} />
        <Button variant="contained" className={classes.cancelButton}>
          취소
        </Button>
      </Box>
    </form>
  );
};
export default React.memo(SignupForm);
