import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { Logo, Description, Footer } from "../components";
import {
  LoginFormContainer,
  UserDescriptionContainer,
  MenuContainer,
} from "../containers";
import { useSelector } from "react-redux";

function Main() {
  const user = useSelector(state => state.user.user);
  useEffect(() => {}, [user]);
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
      {user ? (
        <UserDescriptionContainer name={user.name} />
      ) : (
        <LoginFormContainer />
      )}
      <Box pt={4} />
      <MenuContainer
        name={user ? user.name : null}
        email={user ? user.email : null}
      />
      <Box pt={4} />
      <Footer></Footer>
      <Box pt={4} />
    </>
  );
}

export default React.memo(Main);
