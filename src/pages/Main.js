import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div>메인 페이지 입니다.</div>
      <Link to="/calendar">사용자 소비 달력</Link>
      <br />
      <Link to="/benefits">카드별 소비 혜택</Link>
    </>
  );
}

export default Main;
