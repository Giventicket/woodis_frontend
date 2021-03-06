import React from "react";
import { Box } from "@material-ui/core";
import { Logo, Description, Footer } from "../components";
import { ReregisterFormContainer } from "../containers";

function Reregister() {
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
      <ReregisterFormContainer />
      <Box pt={8} />
      <Footer></Footer>
      <Box pt={4} />
    </>
  );
}

export default React.memo(Reregister);
