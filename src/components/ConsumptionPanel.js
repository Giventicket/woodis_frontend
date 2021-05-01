import React from "react";
import ConsumptionBox from "./ConsumptionBox";
import { Grid, Box, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import queryString from "query-string";
import { withRouter, Link } from "react-router-dom";

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

const MonthLine = function ({ month, date, totalConsumption }) {
  const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Grid container style={{ backgroundColor: "white" }}>
      <Grid item xs style={{ textAlign: "center" }}>
        <StyledSelect value={month} variant="standard">
          {monthArray.map((i, index) => (
            <MenuItem value={i} key={index} style={{ padding: 0 }}>
              <Link
                to={`/calendar?month=${i}&date=${date}`}
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
        <b style={{ fontSize: "2rem" }}>{`월 총 소비 : ${totalConsumption}`}</b>
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

const DataLine = function ({ data }) {
  return (
    <Grid container style={{ backgroundColor: "white" }}>
      {data.map((ele, index) => (
        <Grid item xs style={{ textAlign: "center" }} key={index}>
          <ConsumptionBox date={ele} />
        </Grid>
      ))}
    </Grid>
  );
};

function getDataList(year, month) {
  let firstDate = new Date(`${year}-${month}-01`).getDay();
  let lastDay = new Date(year, (month+1)==13 ? 1 : month+1, -1);
  let lastDate = lastDay.getDate();
  let data = [];
  firstDate = (firstDate+1)%7;
  console.log(firstDate);
  if(firstDate!=0)
	while (--firstDate) data.push(null);

  for (let i = 1; i <= lastDate; i++) data.push(i);
  while (data.length % 7) data.push(null);
  let dataList = [];
  let ele = [];
  while (data.length !== 0) {
    ele = [];
    for (let i = 0; i < 7; i++) ele.push(data.shift());
    dataList.push(ele);
  }


  return dataList;

}

const ConsumptionPanel = function ({ location }) {
  const query = queryString.parse(location.search);
  const names = ["일", "월", "화", "수", "목", "금", "토"];
  const dataList = getDataList(2021, query.month);
  if(!dataList)
	return null;
  return (
    <Grid container>
      <Grid item xs={false} sm={false} md={false} lg={2}></Grid>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <MonthLine
          month={query.month}
          date={query.date}
          totalConsumption={1000000}
        />
        <Box pt={2} />
        <IndexLine names={names} />
        {dataList.map((data, index) => (
          <DataLine data={data} key={index} />
        ))}
      </Grid>
      <Grid item xs={false} sm={false} md={false} lg={2}></Grid>
    </Grid>
  );
};
export default React.memo(withRouter(ConsumptionPanel));
