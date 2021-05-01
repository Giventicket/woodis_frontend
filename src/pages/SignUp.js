import React from "react";
import { Box } from "@material-ui/core";
import { Logo, Description } from "../components";
import { SignupFormContainer } from "../containers";

function SignUp() {
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
      <SignupFormContainer />
    </>
  );
}

export default React.memo(SignUp);
