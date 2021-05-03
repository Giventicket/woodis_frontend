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
  const day = new Date(`${String(query.year)}-${String(query.month).length==1 ? "0"+String(query.month) : String(query.month)}-${String(query.date).length==1 ? "0"+String(query.date) : String(query.date)}`).getDay();
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
        <div key={index} style={dataStyle}>{`${
          tran.TRN_DT
        } ${tran.TRN_TM.substr(0, 2)}시 ${tran.TRN_TM.substr(
          2,
          2
        )}분 ${tran.TRN_TM.substr(4, 2)}초 : ${
          tran.TRN_TXT
        }에서 ${tran.PAY_AM.toLocaleString()}원 결제하셨습니다.`}</div>
      ))}
    </div>
  );
};
export default React.memo(withRouter(ConsumptionBoard));
