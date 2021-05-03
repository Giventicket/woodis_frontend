import React from "react";
import { Box } from "@material-ui/core";
import { Logo, Description, Footer, MyPageForm } from "../components";
import { useSelector } from "react-redux";

function MyPage() {
  const user = useSelector(state => state.user.user);
  if (!user) return <div>로그인 후 활용하세요.</div>;
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
      <MyPageForm user={user} />
      <Box pt={4} />
      <Footer></Footer>
      <Box pt={4} />
    </>
  );
}

export default React.memo(MyPage);
