import React from "react";
import { TextField, Box, Button, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useFadeIn from "../libs/useFadeIn";
import swal from "sweetalert";

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

const SearchIDForm = function ({ onSearchID }) {
  const classes = useStyles();
  const fadeIn = useFadeIn(0.5);
  let name, phone, email, ID;

  return (
    <form
      method="POST"
      className={classes.form}
      {...fadeIn}
      onSubmit={async e => {
        e.preventDefault();
        [name, phone, email] = e.target.querySelectorAll("input");
        console.log(name.value, phone.value, email.value);
        ID = await onSearchID(name.value, phone.value, email.value);
        if (ID) {
          swal(`요청하신 아이디는 ${ID} 입니다.`);
        } else {
          swal("해당 요청에 맞는 아이디가 존재하지 않습니다.");
        }
        name.value = "";
        phone.value = "";
        email.value = "";
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
      />
      <Box mt={2} />
      <Box pb={1} pr={24}>
        <b style={{ fontSize: "0.8rem" }}>전화번호</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        placeholder="전화번호 입력"
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
      />
      <Box mt={4} />
      <Box pl="15px">
        <Button
          variant="contained"
          className={classes.signupButton}
          type="submit"
        >
          아이디 찾기
        </Button>
        <Box component="span" ml={2} />
        <Button variant="contained" className={classes.cancelButton} href="/">
          취소
        </Button>
      </Box>
    </form>
  );
};
export default React.memo(SearchIDForm);
