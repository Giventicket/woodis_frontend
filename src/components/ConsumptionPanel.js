import React from "react";
import ConsumptionBox from "./ConsumptionBox";
import { Grid } from "@material-ui/core";
import { isTablet, isMobile } from "react-device-detect";

const MonthLine = function ({month, margin = 2}) {
  return (
    <Grid container style={{ backgroundColor: "white" }}>
      <Grid item xs style={{ textAlign: "center" }}>
          <b style={{fontSize:"2rem"}}>{`${month}월 소비달력`}</b>
        </Grid>
    </Grid>
  );
};

const IndexLine = function ({ month, names, margin=2 }) {
  return (
    <Grid container style={{ backgroundColor: "white" }}>
      {names.map(name => (
        <Grid item xs style={{ textAlign: "center" }}>
          <ConsumptionBox name={name} key={`IndexLine ${name}`}/>
        </Grid>
      ))}
    </Grid>
  );
};

const DataLine = function ({ data, margin=2 }) {
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
  let margin = 2; 
  if (!isTablet && isMobile) {
    margin = 0;
  }
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
    <>
	  <MonthLine month="5" margin={margin}/>
      <IndexLine names={names} margin={margin}/>
      <DataLine data={data1} margin={margin}/>
      <DataLine data={data2} margin={margin}/>
      <DataLine data={data3} margin={margin}/>
      <DataLine data={data4} margin={margin}/>
    </>
  );
};
export default React.memo(ConsumptionPanel);
