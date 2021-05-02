import React from "react";
import errorPage from "../images/errorPage.png";
import { withRouter, Link } from "react-router-dom";
import { Button, Grid, Box } from "@material-ui/core";
import { Logo, Footer, Description } from "../components";

function ErrorPage({ history }) {
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
      <img src={errorPage} width="100%" alt="error"></img>
      <Box pt={4} />
      <Grid container style={{ width: "100%" }}>
        <Grid item xs />
        <Grid item xs container justify="space-around">
          <Grid item>
            <Link to={"/"}>
              <Button size="large" variant="contained">
                <b>메인으로</b>
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Button
              size="large"
              variant="contained"
              onClick={() => history.goBack()}
            >
              <b>이전페이지</b>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
      <Box pt={4} />
      <Footer />
      <Box pt={4} />
    </>
  );
}
export default React.memo(withRouter(ErrorPage));
