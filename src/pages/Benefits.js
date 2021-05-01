import React from "react";
import { Box } from "@material-ui/core";
import { Logo, Description, SingleMenu, Cards, Footer } from "../components";
import { UserDescriptionContainer } from "../containers";
import { useSelector } from "react-redux";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { isTablet, isMobile } from "react-device-detect";

function Benefits() {
  const user = useSelector(state => state.user.user);
  let iconSize = 200;
  if (!isTablet && isMobile) {
    iconSize = 100;
  }
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
        name={user.name}
        description="WOODIS와 함께 우리카드의 혜택을 확인해보세요."
      >
        <CreditCardIcon style={{ color: "#008CE0", fontSize: iconSize }} />
      </SingleMenu>
      <Box pt={4} />
      <Cards />
      <Box pt={4} />
      <Footer />
      <Box pt={4} />
    </>
  );
}

export default React.memo(Benefits);
