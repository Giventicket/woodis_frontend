import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import {
  Logo,
  Description,
  SingleMenu,
  ConsumptionPanel,
  ConsumptionBoard,
  Footer,
} from "../components";
import { UserDescriptionContainer } from "../containers";
import { useSelector } from "react-redux";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { isTablet, isMobile } from "react-device-detect";

function Calendar() {
  const user = useSelector(state => state.user.user);
  let iconSize = 200;
  if (!isTablet && isMobile) {
    iconSize = 100;
  }

  useEffect(() => {}, [user]);
  if (!user) return <>로그인 후에 사용하세요!</>;
  return (
    <>
      <Box pt={2} />
      <Logo />
      <Box pt={4} />
      <Description>
        WOODIS와 함께 나의 소비달력, 맞춤형 우리카드, 할인 추천을 위한 카드정보
        구독 서비스를 활용해보세요.
      </Description>
      <Box pt={4} />
      <UserDescriptionContainer name={user.name} />
      <Box pt={4} />
      <SingleMenu
        description={`WOODIS와 함께 ${user.name}님의 소비 달력을 확인해보세요.`}
      >
        <CalendarTodayIcon style={{ color: "#008CE0", fontSize: iconSize }} />
      </SingleMenu>
      <Box pt={4} />
      <Grid container style={{ backgroundColor: "transparent" }}>
        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          lg={9}
          style={{ background: "linear-gradient(white, #DAF4FD)" }}
        >
          <ConsumptionPanel />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          style={{ background: "linear-gradient(white, #DAF4FD)" }}
        >
          <ConsumptionBoard />
        </Grid>
      </Grid>
      <Box pt={4} />
      <Footer></Footer>
      <Box pt={4} />
    </>
  );
}

export default React.memo(Calendar);
