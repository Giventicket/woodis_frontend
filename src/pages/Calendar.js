import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { isTablet, isMobile } from "react-device-detect";
import queryString from "query-string";
import { withRouter, Redirect } from "react-router-dom";
import { get_tranList } from "../modules/tranList";
import getParsedTranList from "../libs/getParsedTranList";

function Calendar({ location }) {
  const dispatch = useDispatch();
  const [queryCache, setQueryCache] = useState(null);
  const user = useSelector(state => state.user.user);
  const currentAcc = useSelector(state => state.user.currentAcc);
  const query = queryString.parse(location.search);
  const tranList = useSelector(state => state.tranList.tranList);
  const parsedTranList = getParsedTranList(
    tranList,
    Number(query.year),
    Number(query.month)
  );
  let iconSize = 200;
  if (!isTablet && isMobile) {
    iconSize = 100;
  }

  useEffect(() => {
    if (currentAcc && JSON.stringify(queryCache) !== JSON.stringify(query)) {
      dispatch(get_tranList(query.year, query.month, currentAcc));
      setQueryCache(query);
    }
  }, [dispatch, query, currentAcc, queryCache]);

  if (!user) return null;

  if (queryCache)
    if (
      queryCache.year === undefined ||
      queryCache.month === undefined ||
      queryCache.date === undefined
    ) {
      return <Redirect to="/error"></Redirect>;
    }
  if (parsedTranList)
    return (
      <>
        <Box pt={2} />
        <Logo />
        <Box pt={4} />
        <Description>
          WOODIS와 함께 나의 소비달력, 맞춤형 우리카드, 할인 추천을 위한
          카드정보 구독 서비스를 활용해보세요.
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
            sm={10}
            md={10}
            lg={10}
            style={{ background: "linear-gradient(white, #DAF4FD)" }}
          >
            <ConsumptionPanel parsedTranList={parsedTranList} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={2}
            md={2}
            lg={2}
            style={{ background: "linear-gradient(white, #DAF4FD)" }}
          >
            <ConsumptionBoard parsedTranList={parsedTranList} />
          </Grid>
        </Grid>
        <Box pt={4} />
        <Footer></Footer>
        <Box pt={4} />
      </>
    );
  return null;
}

export default React.memo(withRouter(Calendar));
