import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
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

function Benefit({
  match: {
    params: { cardNum },
  },
}) {
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
      dispatch(get_tranList("2021", "2", currentAcc));
      dispatch(get_another_tranList("2021", "2", currentAcc, cardNum));
    }
  }, [dispatch, currentAcc, cardNum]);

  if (!user || !cardList[cardNum]) return null;
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
        name={user.name}
        description="WOODIS와 함께 우리카드의 혜택을 확인해보세요."
      >
        <CreditCardIcon style={{ color: "#008CE0", fontSize: iconSize }} />
      </SingleMenu>
      <Box pt={4} />
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
            year={2021}
            month={2}
          />
        </Grid>
        <Grid item xs md lg>
          <CreditCard
            imgURL={myCard}
            parsedTranList={parsedTranList}
            year={2021}
            month={2}
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
