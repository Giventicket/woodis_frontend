import React, {useRef} from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  buttonStyle: {
  display: "inline-block",
  position: "relative",
  minWidth: "unset",
  width: "4rem",
  height: "4rem",
  color: "black",
  lineHeight: "4rem",
  backgroundColor: "#DAF4FD",
  textAlign: "center",
  borderRadius: "10px",
  margin: "0.25rem",
  "&:hover": {
	backgroundColor: "#0DF4FD",
  }
}
}));

const rootStyle = {
  display: "inline-block",
  position: "relative",
  width: "4rem",
  height: "4rem",
  color: "black",
  lineHeight: "4rem",
  backgroundColor: "#DAF4FD",
  textAlign: "center",
  borderRadius: "10px",
  margin: "0.25rem",
}

const dayStyle = {
  fontSize: "0.8rem",
  position: "absolute",
  bottom: "0.8rem",
  left: 0,
  width: "100%",
};

const consumptionStyle = {
  position: "absolute",
  top: "1rem",
  left: 0,
  fontSize: "0.4rem",
  width: "100%",
  zIndex: 1
};

const ConsumptionBox = function ({
  name = null,
  day = 1,
  consumption = 10000,
  onClick
}) {
  const classes = useStyles();
  if (name)
    return (
      <div style={rootStyle}>
        <b>{name}</b>
      </div>
    );
  return (
    <Button className={classes.buttonStyle}>
      <b style={dayStyle}>{day}일</b>
      <span style={consumptionStyle} ondragover={(e) => e.preventDefault()}>-{consumption}</span>
    </Button>
  );
};
export default React.memo(ConsumptionBox);
