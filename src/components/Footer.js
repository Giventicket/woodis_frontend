import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const style = {
  textAlign: "center",
  backgroundColor: "white",
  lineHeight: "2rem",
  fontSize: "15px",
  color: "#707070",
};

const Footer = function () {
  return (
    <div style={style}>
      <b>Team WOODIS</b>
      <br />
      서준표: Frontend Developer
      <a
        href="https://www.instagram.com/junpyoseo/"
        target="_blank"
        style={{
          verticalAlign: "-webkit-baseline-middle",
          marginLeft: "0.5rem",
        }}
      >
        <InstagramIcon style={{ color: "#008CE0" }} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100007800972752"
        target="_blank"
        style={{
          verticalAlign: "-webkit-baseline-middle",
          marginLeft: "0.5rem",
        }}
      >
        <FacebookIcon style={{ color: "#008CE0" }} />
      </a>
      <br />
      김대환: Backend Developer
      <br />
      김홍균: Product Manager
      <br />
      김우성: Frontend Developer
      <a
        href="https://github.com/lotus9630"
        target="_blank"
        style={{
          verticalAlign: "-webkit-baseline-middle",
          marginLeft: "0.5rem",
        }}
      >
        <GitHubIcon style={{ color: "#008CE0" }} />
      </a>
      <br />
    </div>
  );
};

export default React.memo(Footer);
