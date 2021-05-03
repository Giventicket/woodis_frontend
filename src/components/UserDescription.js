import React from "react";
import Description from "./Description";
import { Button, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "#008CF0",
    "&:hover": {
      backgroundColor: "#008CE0",
    },
    color: "white",
  },
}));

const UserDescription = function ({ name, logout }) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Description>
        <b style={{ color: "black" }}>{`${name}님 `}</b>WOODIS에 오신 것을
        환영합니다!
      </Description>
      <Box pr={2} />
      <Link style={{ all: "unset" }} to="/mypage">
        <Button size="small" variant="contained" className={classes.button}>
          마이페이지
        </Button>
      </Link>
      <Box pr={2} />
      <Button
        size="small"
        variant="contained"
        className={classes.button}
        onClick={logout}
      >
        로그아웃
      </Button>
    </Grid>
  );
};
export default React.memo(UserDescription);
