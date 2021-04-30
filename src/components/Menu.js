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

const useStyles = makeStyles(theme => ({
  grid: { textAlign: "center" },
}));

const Item = function ({ children, description, href }) {
  return (
    <CardActionArea href={href}>
      <CardMedia>{children}</CardMedia>
      <CardContent>
        <b style={{ fontSize: "15px" }}>{description}</b>
      </CardContent>
    </CardActionArea>
  );
};

const Menu = function () {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs />
      <Grid item xs>
        <Item description="내 소비달력 확인하기" href="/calendar">
          <CalendarTodayIcon style={{ color: "#008CE0", fontSize: 200 }} />
        </Item>
      </Grid>
      <Grid item xs>
        <Item description="우리카드로 알아보는 내 소비 혜택" href="/benefits">
          <CreditCardIcon style={{ color: "#008CE0", fontSize: 200 }} />
        </Item>
      </Grid>
      <Grid item xs>
        <Item description="더 많은 할인을 위한 카드 정복 구독">
          <SubscriptionsIcon style={{ color: "#008CE0", fontSize: 200 }} />
        </Item>
      </Grid>
      <Grid item xs />
    </Grid>
  );
};
export default React.memo(Menu);
