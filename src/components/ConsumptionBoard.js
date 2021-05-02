import React from "react";
import { isTablet, isMobile } from "react-device-detect";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

const dayStyle = {
  textAlign: "center",
  fontSize: "2rem",
  color: "grey",
};

const ConsumptionBoard = function ({ location, parsedTranList }) {
  const query = queryString.parse(location.search);
  const day = new Date(`2021-${query.month}-${query.date}`).getDay();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  let show = false;
  if (!isTablet && isMobile) {
    show = true;
  }

  const dataStyle = {
    textAlign: show ? "center" : "justify",
    fontSize: "0.8rem",
    color: "grey",
    padding: "0.3rem",
  };

  if (!parsedTranList || !parsedTranList[query.date]) return null;
  return (
    <div>
      {show && <hr />}
      <div style={dayStyle}>{`${query.date}일 ${days[day]}요일`}</div>
      {parsedTranList[query.date].map((tran, index) => (
        <div key={index} style={dataStyle}>{`${tran.tranDate} : ${
          tran.place
        }에서 ${tran.pay.toLocaleString()}원 결제하셨습니다.`}</div>
      ))}
    </div>
  );
};
export default React.memo(withRouter(ConsumptionBoard));
