import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const style = {
  background: "white",
  marginTop: "100px",
  paddingLeft: "100px",
  lineHeight: "30px",
  fontSize: "15px",
  color: "#707070",
};

const Footer = function () {
  return (
    <div style={style}>
      팀명: 우디스 <br />
      팀 멤버 <br />
      서준표: Frontend Developer
      <a href="https://www.instagram.com/junpyoseo/" target="_blank">
        <InstagramIcon />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100007800972752"
        target="_blank"
      >
        <FacebookIcon />
      </a>
      <br />
      김대환: Backend Developer
      <br />
      김홍균: Product Manager
      <br />
      김우성: Frontend Developer
      <a href="https://github.com/lotus9630" target="_blank">
        <GitHubIcon />
      </a>
      <br />
    </div>
  );
};

export default React.memo(Footer);
