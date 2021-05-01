import React from "react";
import { Box } from "@material-ui/core";
import { Logo, Description, Menu, Footer } from "../components";
import { LoginFormContainer, UserDescriptionContainer } from "../containers";
import { useSelector } from "react-redux";

function Main() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Box pt={2} />
      <Logo />
      <Box pt={4} />
      <Description>
        WOODIS와 함께 나의 소비달력, 맞춤형 우리카드, 할인 추천을 위한 카드정보
        구독 서비스를 활용해보세요.
      </Description>
      <Box pt={8} />
      {user ? (
        <UserDescriptionContainer name={user.userName} />
      ) : (
        <LoginFormContainer />
      )}
      <Box pt={8} />
      <Menu name={user ? user.userName : null} />
      <Footer></Footer>
    </>
  );
}

export default React.memo(Main);
