import React, { useEffect, useState } from "react";
import { Box, Grid, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Logo,
  Description,
  Footer,
  CreditCard,
  SingleMenu,
} from "../components";
import { UserDescriptionContainer } from "../containers";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import cardList from "../libs/cardList";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { isTablet, isMobile } from "react-device-detect";
import { get_tranList, get_another_tranList } from "../modules/tranList";
import getParsedTranList from "../libs/getParsedTranList";
import myCard from "../images/myCard.png";

const StyledSelect = withStyles({
  root: {
    backgroundColor: "white",
    padding: "0 14px",
    width: "6rem",
    color: "black",
    fontWeight: "700",
    borderRadius: "15px",
    paddingTop: "15px",
    fontSize: "1.2rem",
  },
})(Select);

function Benefit({
  match: {
    params: { cardNum },
  },
}) {
  const [info, setInfo] = useState({ year: "2021", month: "5" });
  const dispatch = useDispatch();
  let iconSize = 200;
  if (!isTablet && isMobile) {
    iconSize = 100;
  }
  const user = useSelector(state => state.user.user);
  const currentAcc = useSelector(state => state.user.currentAcc);
  const tranList = useSelector(state => state.tranList.tranList);
  const anotherTranList = useSelector(state => state.tranList.anotherTranList);
  console.log(tranList);
  const parsedTranList = getParsedTranList(tranList, 2021, 2);
  const parsedAnotherTranList = getParsedTranList(anotherTranList, 2021, 2);
  useEffect(() => {
    if (currentAcc) {
      dispatch(get_tranList(info.year, info.month, currentAcc));
      dispatch(
        get_another_tranList(info.year, info.month, currentAcc, cardNum)
      );
    }
  }, [dispatch, currentAcc, cardNum, info]);

  if (!user || !cardList[cardNum]) return null;
  return (
    <>
      <Box pt={2} />
      <Logo />
      <Box pt={4} />
      <Description>
        WOODIS??? ?????? ?????? ????????????, ????????? ????????????, ?????? ????????? ?????? ????????????
        ?????? ???????????? ??????????????????.
      </Description>
      <Box pt={4} />
      <UserDescriptionContainer name={user.name} />
      <Box pt={4} />
      <SingleMenu
        name={user.name}
        description="WOODIS??? ?????? ??????????????? ????????? ??????????????????."
      >
        <CreditCardIcon style={{ color: "#008CE0", fontSize: iconSize }} />
      </SingleMenu>
      <Box pt={4} />
      <Box style={{ textAlign: "center" }}>
        <StyledSelect
          variant="standard"
          onChange={e => {
            setInfo({ ...info, year: e.target.value });
          }}
          value={info.year}
        >
          {["2017", "2018", "2019", "2020", "2021"].map((i, index) => (
            <MenuItem value={i} key={index} style={{ padding: 0 }}>
              {`${i} ???`}
            </MenuItem>
          ))}
        </StyledSelect>
        <StyledSelect
          variant="standard"
          onChange={e => {
            setInfo({ ...info, month: e.target.value });
          }}
          value={info.month}
        >
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
            (i, index) => (
              <MenuItem value={i} key={index} style={{ padding: 0 }}>
                {`${i} ???`}
              </MenuItem>
            )
          )}
        </StyledSelect>
      </Box>
      <Grid container>
        <Grid xs={12} md={12} lg={12}>
          <Box pt={4} />
        </Grid>
        <Grid item xs={false} md={false} lg={1} />
        <Grid
          item
          xs
          md
          lg
          style={{ borderRight: "inset", borderColor: "white" }}
        >
          <CreditCard
            imgURL={cardList[cardNum].imgURL}
            parsedTranList={parsedAnotherTranList}
            another={true}
            year={info.year}
            month={info.month}
          />
        </Grid>
        <Grid item xs md lg>
          <CreditCard
            imgURL={myCard}
            parsedTranList={parsedTranList}
            year={info.year}
            month={info.month}
          />
        </Grid>
        <Grid item xs={false} md={false} lg={1} />
        <Grid xs={12} md={12} lg={12}>
          <Box mt={4} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
export default React.memo(withRouter(Benefit));
