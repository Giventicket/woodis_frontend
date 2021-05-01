import React from "react";
import ConsumptionBox from "./ConsumptionBox";
import { Grid, Box, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledSelect = withStyles({
  root: {
    backgroundColor: "white",
    padding: "10.5px 14px",
    width: "3rem",
    color: "#715F61",
    borderRadius: "15px",
  },
  input: {
    padding: 0,
    verticalAlign: "super",
  },
})(Select);

const MonthLine = function ({ month, totalConsumption }) {
  const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Grid container style={{ backgroundColor: "white" }}>
      <Grid item xs style={{ textAlign: "center" }}>
        <StyledSelect defaultValue={month} variant="outlined">
          {monthArray.map(i => (
            <MenuItem value={i} key={`MonthSelect ${i}`}>
              {`${i} 월`}
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
      {names.map(name => (
        <Grid item xs style={{ textAlign: "center" }}>
          <ConsumptionBox name={name} key={`IndexLine ${name}`} />
        </Grid>
      ))}
    </Grid>
  );
};

const DataLine = function ({ data }) {
  return (
    <Grid container style={{ backgroundColor: "white" }}>
      {data.map(prop => (
        <Grid item xs style={{ textAlign: "center" }}>
          <ConsumptionBox
            day={prop.day}
            consumption={prop.consumption}
            key={`DataLine ${prop.day}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const ConsumptionPanel = function () {
  const names = ["일", "월", "화", "수", "목", "금", "토"];
  const data1 = [
    { day: 1, consumption: 1000 },
    { day: 2, consumption: 2000 },
    { day: 3, consumption: 13000 },
    { day: 4, consumption: 4000 },
    { day: 5, consumption: 5000 },
    { day: 6, consumption: 1000 },
    { day: 7, consumption: 2000 },
  ];
  const data2 = [
    { day: 8, consumption: 1000 },
    { day: 9, consumption: 2000 },
    { day: 10, consumption: 13000 },
    { day: 11, consumption: 4000 },
    { day: 12, consumption: 5000 },
    { day: 13, consumption: 1000 },
    { day: 14, consumption: 2000 },
  ];
  const data3 = [
    { day: 15, consumption: 1000 },
    { day: 16, consumption: 2000 },
    { day: 17, consumption: 13000 },
    { day: 18, consumption: 4000 },
    { day: 19, consumption: 5000 },
    { day: 20, consumption: 1000 },
    { day: 21, consumption: 2000 },
  ];
  const data4 = [
    { day: 22, consumption: 1000 },
    { day: 23, consumption: 2000 },
    { day: 24, consumption: 13000 },
    { day: 25, consumption: 4000 },
    { day: 26, consumption: 5000 },
    { day: 27, consumption: 1000 },
    { day: 28, consumption: 2000 },
  ];

  return (
    <Grid container>
      <Grid item xs={0} sm={0} md={0} lg={2}></Grid>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <MonthLine month="5" totalConsumption={1000000} />
        <Box pt={2} />
        <IndexLine names={names} />
        <DataLine data={data1} />
        <DataLine data={data2} />
        <DataLine data={data3} />
        <DataLine data={data4} />
      </Grid>
      <Grid item xs={0} sm={0} md={0} lg={2}></Grid>
    </Grid>
  );
};
export default React.memo(ConsumptionPanel);
