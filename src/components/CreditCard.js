import React from "react";
import { Box } from "@material-ui/core";

const style = {
  textAlign: "center",
  fontSize: "1rem",
};

const DayConsumptionBox = function () {
  return (
    <div
      style={{
        color: "black",
        maxHeight: "500px",
        overflowY: "scroll",
        scrollbarWidth: "none",
		backgroundColor:"white",
		marginLeft : "1rem",
		marginRight : "1rem",
      }}
    >
      <div
        style={{
          color: "grey",
          fontSize: "1.5rem",
        }}
      >
        4월 11일 일요일
      </div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
      <div>2021-05-05 08:31:38 : 정육박사식상 10000원</div>
    </div>
  );
};

const CreditCard = function ({ imgURL }) {
  return (
	<>
    <div style={style}>
      <img src={imgURL} alt="card"></img>
      <Box pt={2}>
        <b>총현금흐름 : 1000원</b>
      </Box>
      <hr />
      <DayConsumptionBox />
    </div>
    <Box pt={4}></Box>
  </>
  );
};
export default React.memo(CreditCard);
