import React from "react";
import { TextField, Box, Button, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useFadeIn from "../libs/useFadeIn";

const useStyles = makeStyles(theme => ({
  form: {
    width: "261px",
    margin: "0 auto",
    textAlign: "left",
  },
  input: {
    backgroundColor: "white",
    minWidth: "unset",
    color: "#715F61",
    borderRadius: "5px",
    paddingTop: "5px",
    fontSize: "0.5rem",
    width: "100%",
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
    width: "215px",
    color: "#715F61",
    borderRadius: "5px",
  },
  input: {
    padding: 0,
  },
})(Select);

const MyPageForm = function ({ user }) {
  const classes = useStyles();

  return (
    <div style={{ width: "261px", margin: "0 auto", textAlign: "left" }}>
      <Box pb={1}>
        <b style={{ fontSize: "0.8rem" }}>이름</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        placeholder="이름 입력"
        disabled={true}
        value={user.name}
      />
      <Box mt={2} />
      <Box pb={1}>
        <b style={{ fontSize: "0.8rem" }}>통신사</b>
      </Box>
      <StyledSelect
        defaultValue={user.agency}
        variant="outlined"
        disabled={true}
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
      <Box pb={1}>
        <b style={{ fontSize: "0.8rem" }}>전화번호</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        disabled={true}
        value={user.phone}
      />
      <Box mt={2} />
      <Box pt={2} pb={1}>
        <b style={{ fontSize: "0.8rem" }}>이메일</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        disabled={true}
        value={user.email}
      />
      <Box mt={2} />
      <Box pb={1}>
        <b style={{ fontSize: "0.8rem" }}>아이디</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        disabled={true}
        value={user.id}
      />
      <Box mt={2} />
      <Box pb={1}>
        <b style={{ fontSize: "0.8rem" }}>현재 계좌번호</b>
      </Box>
      <TextField
        className={classes.input}
        size="small"
        variant="standard"
        disabled={true}
        value={user.accList[0]}
      />

      <Box mt={4} />
      <Box style={{ textAlign: "right" }}>
        <Box component="span" ml={2} />
        <Button variant="contained" className={classes.cancelButton} href="/">
          홈으로
        </Button>
      </Box>
    </div>
  );
};
export default React.memo(MyPageForm);
