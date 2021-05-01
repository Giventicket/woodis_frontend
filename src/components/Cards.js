import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { isTablet, isMobile } from "react-device-detect";

const card1 = {
  name: "카드의 정석 SSO3 NEW-TRO CHECK",
  benefits: [
    {
      title: "1천원 캐시백",
      detail: "편의점, 서점, 베이커리, 패스트푸트, 티머니 충전, 1천원 캐시백",
    },
    {
      title: "OK캐시백, CJ ONE 멤버십",
      detail: "OK캐시백, CJ ONE 멤버십 기능 탐재",
    },
    {
      title: "티머니 선불",
      detail: "티머니 선불 교통카드 기능, 탐재",
    },
  ],
  imgURL: "/img/SSO3.png",
};

const card2 = {
  name: "카드의 정석 COOKIE CHECK",
  benefits: [
    {
      title: "5천원",
      detail: "CGV, 롯데시네마 5천원 캐시백",
    },
    {
      title: "공항 라운지",
      detail: "전세계 1000여개 공항라운지 무료 입장 서비스",
    },
    {
      title: "멤버십 기능",
      detail: "OK캐쉬백, CJ ONE 맴버십 가능 탑재",
    },
  ],
  imgURL: "/img/COOKIE.png",
  detailURL: "https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S02.do",
  registerURL: "https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do",
};

const card3 = {
  name: "카드의 정석 CREAM TEENS CHECK",
  benefits: [
    {
      title: "1천원 캐시백",
      detail: "편의점 서점 베이커리, 패스트푸드, 티머니 충천, 1천원 캐시백",
    },
    {
      title: "OK 캐시백, CJ ONE 멤버십",
      detail: "OK 캐시백, CJ ONE 멤버십 기능 탑재",
    },
    {
      title: "티머니 선불",
      detail: "티머니 선불 교통카드 기능, 탐재",
    },
  ],
  imgURL: "/img/CREAM.png",
};

const card4 = {
  name: "갤러리아 체크카드",
  benefits: [
    {
      title: "갤러리아백화점 할인체크",
      detail: "갤러리아백화점 5% 현장 할인",
    },
    {
      title: "생활 밀착형 적립",
      detail: "커피, 영화, 이동통신, 대중 교통, 전기차 충전 금액 적립",
    },
    {
      title: "주요 놀이 공원 50% 현장할인",
      detail:
        "롯데월드(아쿠아리움), 에버랜드, 이월드(대구), 경주월드, 통도환타지아",
    },
  ],
  imgURL: "/img/Galleria.png",
};

const cardList = [card1, card2, card3, card4];

const Cards = function () {
  let padding = false;
  if (!isTablet && isMobile) {
    padding = true;
  }
  return (
    <Box pl={8} pr={8}>
      {cardList.map((card, index) => (
        <>
          <Grid container key={index}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg
              xl
              style={{ textAlign: "center" }}
            >
              <img src={card.imgURL} alt=""/>
            </Grid>
            {padding ? (
              <Grid item xs={12}>
                <Box pt={2} />
              </Grid>
            ) : null}
            <Grid
              item
              container
              direction="column"
              xs={12}
              sm={12}
              md={12}
              lg
              xl
            >
              <Grid item xs style={{ textAlign: "center", fontSize: "1.2rem" }}>
                <b>{card.name}</b>
              </Grid>
              <Grid item container xs>
					<Grid item xs={1}/>
                {card.benefits.map((benefit, index) => (
				<>
                  <Grid
                    container
                    direction="column"
                    item
                    xs
                    key={index}
                    style={{
                      backgroundColor:"white",
					  borderRadius:"10px",
					  borderColor:"blue",
					  paddingLeft:"0.25rem",
					  paddingRight:"0.25rem",
					  borderWidth:"2px"
                    }}
                  >
                    <Grid
                      item
                      xs
                      style={{
                        fontSize: "0.8rem",
                        textAlign: "center",
                      }}
                    >
                      <b>{`${benefit.title}`}</b>
                    </Grid>
                    <Grid
                      item
                      xs
                      style={{ fontSize: "0.6rem", textAlign: "center",}}
                    >{`[${benefit.detail}]`}</Grid>
                  </Grid>
				</>
                ))}
				<Grid item xs={1}/>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
            {padding ? (
              <Grid item xs={12}>
                <Box pt={2} />
              </Grid>
            ) : null}
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              lg
              xl
              direction="column"
              style={{ placeSelf: "center", textAlign: "center" }}
              spacing={1}
            >
              <Grid item xs>
                <Button
                  variant="outlined"
                  fullWidth={true}
                  style={{
                    fontWeight: "700",
                    maxWidth: "15rem",
                    borderWidth: "3px",
                    borderColor: "black",
                  }}
                >
                  내가 이 카드를 썼더라면
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  href="https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S02.do"
                  target="_blank"
                  variant="contained"
                  fullWidth={true}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    maxWidth: "15rem",
                  }}
                >
                  자세히 보기
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  href="https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do"
                  variant="outlined"
                  target="_blank"
                  fullWidth={true}
                  style={{
                    backgroundColor: "#3FD0FF",
                    color: "white",
                    maxWidth: "15rem",
                  }}
                >
                  카드 신청
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <hr />
        </>
      ))}
    </Box>
  );
};

export default React.memo(Cards);
