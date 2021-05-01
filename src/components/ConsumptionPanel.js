import React from "react";
import ConsumptionBox from "./ConsumptionBox";
import { Grid, Box, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import queryString from "query-string";
import { withRouter, Link } from "react-router-dom";
import getDataList from "../libs/getDataList";

const StyledSelect = withStyles({
  root: {
    backgroundColor: "white",
    padding: "0 14px",
    width: "4rem",
    color: "black",
    fontWeight: "700",
    borderRadius: "15px",
    paddingTop: "15px",
    fontSize: "1.5rem",
  },
})(Select);

const MonthLine = function ({ month, totalConsumption }) {
  const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Grid container style={{ backgroundColor: "white" }}>
      <Grid item xs style={{ textAlign: "center" }}>
        <StyledSelect value={month} variant="standard">
          {monthArray.map((i, index) => (
            <MenuItem value={i} key={index} style={{ padding: 0 }}>
              <Link
                to={`/calendar?month=${i}&date=${1}`}
                style={{
                  all: "unset",
                  display: "block",
                  width: "100%",
                  padding: "6px 16px",
                  position: "relative",
                  right: "10px",
                }}
              >{`${i} 월`}</Link>
            </MenuItem>
          ))}
        </StyledSelect>
        <b style={{ fontSize: "2rem" }}>{`월 총 소비 : ${totalConsumption.toLocaleString()}원`}</b>
      </Grid>
    </Grid>
  );
};

const IndexLine = function ({ names }) {
  return (
    <Grid container style={{ backgroundColor: "white" }}>
      {names.map((name, index) => (
        <Grid item xs style={{ textAlign: "center" }} key={index}>
          <ConsumptionBox name={name} />
        </Grid>
      ))}
    </Grid>
  );
};

const DataLine = function ({ data, parsedTranList }) {
  return (
    <Grid container style={{ backgroundColor: "white" }}>
      {data.map((ele, index) => (
        <Grid item xs style={{ textAlign: "center" }} key={index}>
          <ConsumptionBox date={ele} parsedTranList={parsedTranList}/>
        </Grid>
      ))}
    </Grid>
  );
};

const ConsumptionPanel = function ({ location, parsedTranList }) {
  const query = queryString.parse(location.search);
  const names = ["일", "월", "화", "수", "목", "금", "토"];
  const dataList = getDataList(2021, query.month);
  if (!dataList || !parsedTranList) return null;
  return (
    <Grid container>
      <Grid item xs={false} sm={false} md={false} lg={2}></Grid>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <MonthLine
          month={query.month}
          date={query.date}
          totalConsumption={parsedTranList.reduce((prev1, next1) => {
			  if(next1){
				  let sum = next1.reduce((prev2, next2)=>{
					  return prev2+next2.pay;
				  },0);
				  return prev1+sum;				  
			  }
			  return prev1;
		  },0)}
        />
        <Box pt={2} />
        <IndexLine names={names} />
        {dataList.map((data, index) => (
          <DataLine data={data} parsedTranList={parsedTranList} key={index} />
        ))}
      </Grid>
      <Grid item xs={false} sm={false} md={false} lg={2}></Grid>
    </Grid>
  );
};
export default React.memo(withRouter(ConsumptionPanel));
