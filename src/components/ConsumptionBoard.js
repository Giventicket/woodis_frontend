import React from "react";

const dayStyle = {
  textAlign: "left",
  fontSize: "2rem",
  color: "grey",
  paddingLeft: "1rem",
};

const dataStyle = {
  textAlign: "left",
  fontSize: "1rem",
  color: "grey",
  padding: "1rem",
  paddingLeft: "0.5rem",
};

const ConsumptionBoard = function () {
  return (
    <>
      <div style={dayStyle}>11일 일요일</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
      <div style={dataStyle}>-10000원 : CU 편의점</div>
    </>
  );
};
export default React.memo(ConsumptionBoard);
