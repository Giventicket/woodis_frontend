import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { isTablet, isMobile } from "react-device-detect";

const useStyles = makeStyles(theme => ({
  buttonStyle: {
    display: "inline-block",
    position: "relative",
    minWidth: "unset",
    width: ({ size }) => size,
    height: ({ size }) => size,
    color: "black",
    lineHeight: ({ size }) => size,
    backgroundColor: "#DAF4FD",
    textAlign: "center",
    borderRadius: "10px",
    margin: "0.25rem",
    "&:hover": {
      backgroundColor: "#0DF4FD",
    },
  },

  root: {
    display: "inline-block",
    position: "relative",
    width: ({ size }) => size,
    height: ({ size }) => size,
    color: "black",
    lineHeight: ({ size }) => size,
    backgroundColor: "#DAF4FD",
    textAlign: "center",
    borderRadius: "10px",
    margin: "0.25rem",
  },

  day: {
    fontSize: "0.8rem",
    position: "absolute",
    bottom: "0.8rem",
    left: 0,
    width: "100%",
  },

  consumption: {
    position: "absolute",
    top: "1rem",
    left: 0,
    fontSize: "0.4rem",
    width: "100%",
    zIndex: 1,
  },
}));

const ConsumptionBox = function ({
  name = null,
  day = 1,
  consumption = 10000,
  onClick,
}) {
  let size = "4rem";
  if (!isTablet && isMobile) {
    size = "3.5rem";
  }
  const classes = useStyles({ size });
  if (name)
    return (
      <div className={classes.root}>
        <b>{name}</b>
      </div>
    );
  return (
    <Button className={classes.buttonStyle}>
      <b className={classes.day}>{day}일</b>
      <span
        className={classes.consumption}
        ondragover={e => e.preventDefault()}
      >
        -{consumption}
      </span>
    </Button>
  );
};
export default React.memo(ConsumptionBox);
