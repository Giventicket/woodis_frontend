import { ViewColumn } from "@material-ui/icons";
import React from "react";

const card1 = {
  name: "카드의 정석 SSO3 NEW-TRO CHECK",
  benfits: [
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
  benfits: [
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
  benfits: [
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
  benfits: [
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

const style = {
  background: "white",
  margin: "40px",
  padding: "30px",
};

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "40px",
  marginBottom: "40px",
  padding: "10px",
  borderBottom: "solid",
};

const cardInfoStyle = {
  marginLeft: "0px",
};

const benefitsStyle = {
  display: "flex",
  width: "600px",
};

const benefitStyle = {
  marginLeft: "10px",
  marginRight: "10px",
  fontSize: "15px",
};

const buttonListStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const buttonStyle = {
  padding: "10px",
  borderRadius: "10px",
  margin: "0px",
};

const Cards = function () {
  return (
    <div style={style}>
      {cardList.map((card, index) => (
        <div style={cardStyle} key={index}>
          <img src={card.imgURL} alt="" />
          <div style={cardInfoStyle}>
            <h3>{card.name}</h3>
            <section style={benefitsStyle}>
              {card.benfits.map((benefit, index) => (
                <div style={benefitStyle} key={index}>
                  <div style={{ fontWeight: "bold" }}>{benefit.title}</div>
                  <div>{benefit.detail}</div>
                </div>
              ))}
            </section>
          </div>
          <section style={buttonListStyle}>
            <button style={buttonStyle}>내가 이 카드를 썼더라면</button>
            <a
              href="https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S02.do"
              target="_blank"
            >
              <button style={buttonStyle}>자세히 보기</button>
            </a>
            <a
              href="https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do"
              target="_blank"
            >
              <button style={buttonStyle}>카드 신청</button>
            </a>
          </section>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Cards);
