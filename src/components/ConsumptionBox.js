import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { isTablet, isMobile } from "react-device-detect";
import queryString from "query-string";
import { withRouter, Link } from "react-router-dom";
import getDateSum from "../libs/getDateSum";

const useStyles = makeStyles(theme => ({
  linkStyle: {
    display: "inline-block",
    position: "relative",
    minWidth: "unset",
    width: ({ size }) => size,
    height: ({ size }) => size,
    color: "black",
    lineHeight: ({ size }) => size,
    backgroundColor: ({ activated }) => {
      return activated ? "#0DF4FD" : "#DAF4FD";
    },
    textAlign: "center",
    borderRadius: "10px",
    margin: "0.25rem",
    marginBottom: "1rem",
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
    marginBottom: "1rem",
  },

  date: {
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
    fontSize: "0.5rem",
    width: "100%",
    zIndex: 1,
  },
}));

const ConsumptionBox = function ({
  name = null,
  date = 1,
  parsedTranList = null,
  location,
}) {
  const query = queryString.parse(location.search);
  let size = "4.5rem";
  const activated = date === Number(query.date);
  const classes = useStyles({ size, activated });
  if (name)
    return (
      <div className={classes.root}>
        <b>{name}</b>
      </div>
    );
  if (!date) return null;
  if (!parsedTranList[date]) return null;
  return (
    <Link
      to={`/calendar?year=${query.year}&month=${query.month}&date=${date}`}
      className={classes.linkStyle}
    >
      <b className={classes.date}>{date}일</b>
      <span className={classes.consumption}>
        {getDateSum(parsedTranList, date).toLocaleString()}원
      </span>
    </Link>
  );
};
export default React.memo(withRouter(ConsumptionBox));
