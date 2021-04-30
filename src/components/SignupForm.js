import React from "react";
import { TextField, Box, Button, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useFadeIn from "../libs/useFadeIn";

const useStyles = makeStyles(theme => ({
  form: { textAlign: "center" },
  input: {
    backgroundColor: "#E8F2FD",
    width: "243px",
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

const StyledSelect = withStyles({
  root: {
    backgroundColor: "#E8F2FD",
    padding: "10.5px 14px",
    width: "198px",
    color: "#715F61",
  },
  input: {
    padding: 0,
  },
})(Select);

const SignupForm = function ({
  onChangeName,
  onChangeAgency,
  onChangePhone,
  onChangeEmail,
  onChangeId,
  onChangePassword,
  onChangePasswordConfirm,
  signup,
}) {
  const classes = useStyles();
  const fadeIn = useFadeIn(0.5);

  return (
    <form
      className={classes.form}
      {...fadeIn}
      onSubmit={e => {
        e.preventDefault();
        signup();
      }}
    >
      <TextField
        className={classes.input}
        size="small"
        variant="outlined"
        placeholder="이름 입력"
        onChange={e => onChangeName(e.target.value)}
      />
      <Box mt={2} />
      <StyledSelect
        defaultValue={1}
        variant="outlined"
        onChange={e => onChangeAgency(e.target.value.toString())}
      >
        <MenuItem value={1} key="SKT">
          SKT
        </MenuItem>
        <MenuItem value={2} key="KT">
          KT
        </MenuItem>
        <MenuItem value={3} key="LGU+">
          LGU+
        </MenuItem>
        <MenuItem value={4} key="SKT(알뜰폰)">
          SKT(알뜰폰)
        </MenuItem>
        <MenuItem value={5} key="KT(알뜰폰)">
          KT(알뜰폰)
        </MenuItem>
        <MenuItem value={6} key="LGU+(알뜰폰)">
          LGU+(알뜰폰)
        </MenuItem>
      </StyledSelect>
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
      <Box pl="15px">
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
