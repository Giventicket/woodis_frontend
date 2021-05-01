import React from "react";

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
  paddingLeft: "1rem",
};

const ConsumptionBoard = function () {
  return (
    <div>
      <div style={dayStyle}>11일 일요일</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
    </div>
  );
};
export default React.memo(ConsumptionBoard);
