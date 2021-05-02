import React from "react";
import { TextField, Box, Button, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useFadeIn from "../libs/useFadeIn";

const useStyles = makeStyles(theme => ({
  form: { textAlign: "center" },
  input: {
    backgroundColor: "white",
    width: "243px",
    color: "#715F61",
    borderRadius: "10px",
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
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

const StyledSelect = withStyles({
  root: {
    backgroundColor: "white",
    padding: "10.5px 14px",
    width: "208px",
    color: "#715F61",
    borderRadius: "15px",
  },
  input: {
    padding: 0,
  },
})(Select);

const ReregisterForm = function ({ signup }) {
  const classes = useStyles();
  const fadeIn = useFadeIn(0.5);

  return (
    <form method="POST" className={classes.form} {...fadeIn}>
      {/* 처음에 비밀번호를 바꾸려는 사용자의 계정을 확인하기 위해 아이디를  확인한다. */}
      <Box pb={1} pr={26}>
        <b style={{ fontSize: "0.8rem" }}>아이디</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        placeholder="아이디 입력"
      />
      <Box mt={4} />
      <Box pl="15px">
        <Button
          variant="contained"
          className={classes.signupButton}
          type="submit"
        >
          아이디 확인
        </Button>
        <Box component="span" ml={2} />
        <Button variant="contained" className={classes.cancelButton} href="/">
          취소
        </Button>
      </Box>
      <Box mt={5} />

      {/* 아이디를 확인 하고 맞으면 비밀번호를 변경하는 UI를 보여준다.*/}
      <Box pb={1} pr={24}>
        <b style={{ fontSize: "0.8rem" }}>비밀번호</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        type="password"
        placeholder="비밀번호 입력"
      />
      <Box mt={2} />
      <Box pb={1} pr={19}>
        <b style={{ fontSize: "0.8rem" }}>비밀번호 확인</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        type="password"
        placeholder="비밀번호 확인"
      />
      <Box mt={2} />

      <Box pl="15px">
        <Button
          variant="contained"
          className={classes.signupButton}
          type="submit"
        >
          비밀번호 변경
        </Button>
        <Box component="span" ml={2} />
        <Button variant="contained" className={classes.cancelButton} href="/">
          취소
        </Button>
      </Box>
    </form>
  );
};
export default React.memo(ReregisterForm);
