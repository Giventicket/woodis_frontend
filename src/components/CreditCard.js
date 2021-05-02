import React from "react";
import { Box } from "@material-ui/core";
import getParsedTranList from "../libs/getParsedTranList";

const style = {
  textAlign: "center",
  fontSize: "1rem",
};

const DayConsumptionBox = function ({ parsedTranList, year, month }) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  if (!parsedTranList) return null;
  return (
    <div
      style={{
        color: "black",
        maxHeight: "500px",
        overflowY: "scroll",
        scrollbarWidth: "none",
        backgroundColor: "white",
        marginLeft: "1rem",
        marginRight: "1rem",
      }}
    >
      {parsedTranList.map((array, index) =>
        index === 0 ? null : (
          <div key={index}>
            <div
              style={{
                color: "grey",
                fontSize: "1.5rem",
              }}
            >
              {`${year}년 ${index}일`}
            </div>
            {array.map((ele, idx) =>
              ele ? (
                <div key={idx}>
                  {`${ele.tranDate} : ${ele.place} ${ele.pay}`}
                </div>
              ) : null
            )}
          </div>
        )
      )}
    </div>
  );
};

const CreditCard = function ({ imgURL, parsedTranList, year, month }) {
  if (!parsedTranList) return null;
  return (
    <>
      <div style={style}>
        <img src={imgURL} alt="card"></img>
        <Box pt={2}>
          <b>총현금흐름 : 1000원</b>
        </Box>
        <hr />
        <DayConsumptionBox parsedTranList={parsedTranList} year={year} month={month}/>
      </div>
      <Box pt={4}></Box>
    </>
  );
};
export default React.memo(CreditCard);
