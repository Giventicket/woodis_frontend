import React from "react";
import { Box } from "@material-ui/core";
import getParsedTranList from "../libs/getParsedTranList";
import getMonthSum from "../libs/getMonthSum";

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
        (index === 0 || array.length===0) ? null : (
          <div key={index} >
            <div
              style={{
                color: "grey",
                fontSize: "1.5rem",
              }}
            >
              {`${year}년 ${month}월 ${index}일 ${days[new Date(`${year}-${month}-${index}`).getDay()]}요일`}
            </div>
            {array.map((tran, idx) =>
              tran ? (
                <div key={idx} style={{color:"black", lineHeight:"2rem"}}>
					<b>{`${tran.TRN_DT} ${tran.TRN_TM.substr(0,2)}시 ${tran.TRN_TM.substr(2,2)}분${tran.TRN_TM.substr(4,2)}초 -> ${tran.TRN_TXT} [${tran.PAY_AM.toLocaleString()}원]`}</b>
                </div>
              ) : null
            )}
			<hr style={{width:"80%"}} />
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
        <img src={imgURL} alt="card" height="158px"></img>
        <Box pt={2}>
          <b>{`총현금흐름 : ${getMonthSum(parsedTranList).toLocaleString()}원`}</b>
        </Box>
        <hr />
        <DayConsumptionBox parsedTranList={parsedTranList} year={year} month={month}/>
      </div>
      <Box pt={4}></Box>
    </>
  );
};
export default React.memo(CreditCard);
