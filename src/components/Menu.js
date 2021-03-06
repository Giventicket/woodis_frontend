import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import {
  Grid,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useFadeIn from "../libs/useFadeIn";
import { isTablet, isMobile } from "react-device-detect";
import swal from "sweetalert";

const useStyles = makeStyles(theme => ({
  grid: {
    textAlign: "center",
    background: "white",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
}));

const Item = function ({ children, description, href, delay, onClick }) {
  const fadeIn = useFadeIn(2, delay);
  return (
    <CardActionArea {...fadeIn} href={href} onClick={onClick}>
      <CardMedia>{children}</CardMedia>
      <CardContent>
        <b style={{ fontSize: "0.75rem" }}>{description}</b>
      </CardContent>
    </CardActionArea>
  );
};

const getMonthandDay = () => {
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();

  return `?year=${year}&month=${month}&date=${date}`;
};

const Menu = function ({ name, onClick1, onClick2, email }) {
  const classes = useStyles();
  let iconSize = 200;
  if (!isTablet && isMobile) {
    iconSize = 100;
  }
  let calanderDescription = "내 소비달력 확인하기";
  let creditCardDescription = "우리카드로 알아보는 나의 소비 혜택";
  let subscriptDescription = "더 많은 할인을 위한 카드 정보 구독";
  if (name) {
    calanderDescription = `${name}님의 소비달력 확인하기`;
    creditCardDescription = `우리카드로 알아보는 ${name}님의 소비 혜택`;
  }
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={false} sm />
      <Grid item xs sm>
        <Item
          onClick={onClick1}
          delay={0}
          description={calanderDescription}
          href={`/calendar${getMonthandDay()}`}
        >
          <CalendarTodayIcon style={{ color: "#008CE0", fontSize: iconSize }} />
        </Item>
      </Grid>
      <Grid item xs sm>
        <Item
          onClick={onClick1}
          delay={0.5}
          description={creditCardDescription}
          href="/benefits"
        >
          <CreditCardIcon style={{ color: "#008CE0", fontSize: iconSize }} />
        </Item>
      </Grid>
      <Grid item xs sm>
        <Item onClick={onClick2} delay={1} description={subscriptDescription}>
          <SubscriptionsIcon style={{ color: "#008CE0", fontSize: iconSize }} />
        </Item>
      </Grid>
      <Grid item xs={false} sm />
    </Grid>
  );
};
export default React.memo(Menu);
