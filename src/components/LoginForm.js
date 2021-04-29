import { Box, TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    display: "inline-block",
  },
  input: {
    backgroundColor: "#E8F2FD",
    color: "#715F61",
  },
  button: {
    height: "88px",
    color: "white",
    backgroundColor: "#008CF0",
    "&:hover": {
      backgroundColor: "#008CE0",
    },
  },
}));

const LoginForm = function ({onChangeId, onChangePassword}) {
  const classes = useStyles();
  return (
    <Grid justify="center" container>
      <Grid item>
        <Box className={classes.box} mr={2}>
          <TextField
            className={classes.input}
            size="small"
            variant="outlined"
            placeholder="아이디 입력"
			onChange = {(e) => onChangeId(e.target.value)}
          />
          <Box mt={1} />
          <TextField
            className={classes.input}
            size="small"
            variant="outlined"
            placeholder="비밀번호 입력"
			onChange = {(e) => onChangePassword(e.target.value)}
          />
        </Box>
      </Grid>
      <Grid item>
        <Button className={classes.button} variant="contained">
          로그인
        </Button>
      </Grid>
    </Grid>
  );
};
export default LoginForm;
