import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const style = {
  textAlign: "center",
};

const Logo = function () {
  return (
    <div style={style}>
      <Link to="/">
        <img
          src={logo}
          style={{ borderRadius: "30px" }}
          width="200px"
          alt="Woodis"
        ></img>
      </Link>
    </div>
  );
};
export default React.memo(Logo);
