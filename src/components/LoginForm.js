import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    position: "relative",
  },
  box: {
    display: "inline-block",
  },
  input: {
    backgroundColor: "#E8F2FD",
    color: "#715F61",
  },
  links: { paddingTop: "1rem", paddingLeft: "781px" },
  button: {
    height: "97.5px",
    color: "white",
    backgroundColor: "#008CF0",
    "&:hover": {
      backgroundColor: "#008CE0",
    },
  },
}));

const LoginForm = function ({ onChangeId, onChangePassword }) {
  const classes = useStyles();
  return (
    <>
      <form>
        <Grid container justify="center">
          <Grid item>
            <Box className={classes.box} mr={2}>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="아이디 입력"
                onChange={e => onChangeId(e.target.value)}
              />
              <Box mt={1} />
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="비밀번호 입력"
                type="password"
                onChange={e => onChangePassword(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
            >
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className={classes.links}>
        <Link to="./searchid">
          <Typography component="span">아이디 조회</Typography>
        </Link>
        <Typography component="span"> | </Typography>
        <Link to="./reregister">
          <Typography component="span">비밀번호 재등록</Typography>
        </Link>
        <Typography component="span"> | </Typography>
        <Link to="./signup">
          <Typography component="span">회원가입</Typography>
        </Link>
      </div>
    </>
  );
};
export default React.memo(LoginForm);
