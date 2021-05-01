import React from "react";
import errorPage from "../images/errorPage.png";

function ErrorPage() {
  return (
    <img
      src={errorPage}
      style={{ borderRadius: "30px" }}
      width="100%"
      alt="error"
    ></img>
  );
}
export default React.memo(ErrorPage);
