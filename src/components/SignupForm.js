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
      method="post"
      className={classes.form}
      {...fadeIn}
      onSubmit={e => {
        e.preventDefault();
        signup();
      }}
    >
      <Box pb={1} pr={28}>
        <b style={{ fontSize: "0.8rem" }}>이름</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        placeholder="이름 입력"
        onChange={e => onChangeName(e.target.value)}
      />
      <Box mt={2} />
      <Box pb={1} pr={26}>
        <b style={{ fontSize: "0.8rem" }}>통신사</b>
      </Box>
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
      <Box pb={1} pr={24}>
        <b style={{ fontSize: "0.8rem" }}>전화번호</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        placeholder="전화번호 입력"
        onChange={e => onChangePhone(e.target.value)}
      />
      <Box mt={2} />
      <Box pb={1} pr={26}>
        <b style={{ fontSize: "0.8rem" }}>이메일</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        placeholder="이메일 입력"
        onChange={e => onChangeEmail(e.target.value)}
      />
      <Box mt={2} />
      <Box pb={1} pr={26}>
        <b style={{ fontSize: "0.8rem" }}>아이디</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        placeholder="아이디 입력"
        onChange={e => onChangeId(e.target.value)}
      />
      <Box mt={2} />
      <Box pb={1} pr={24}>
        <b style={{ fontSize: "0.8rem" }}>비밀번호</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        type="password"
        placeholder="비밀번호 입력"
        onChange={e => onChangePassword(e.target.value)}
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
        onChange={e => onChangePasswordConfirm(e.target.value)}
      />
      <Box mt={4} />
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
