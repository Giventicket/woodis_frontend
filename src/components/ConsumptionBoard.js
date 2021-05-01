import React from "react";
import { isTablet, isMobile } from "react-device-detect";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

const dayStyle = {
  textAlign: "center",
  fontSize: "2rem",
  color: "grey",
};

const dataStyle = {
  textAlign: "center",
  fontSize: "0.8rem",
  color: "grey",
  padding: "0.3rem",
};

const ConsumptionBoard = function ({ location }) {
  const query = queryString.parse(location.search);
  let show = false;
  if (!isTablet && isMobile) {
    show = true;
  }
  return (
    <div>
      {show && <hr />}
      <div style={dayStyle}>{`${query.date}일 일요일`}</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
    </div>
  );
};
export default React.memo(withRouter(ConsumptionBoard));
