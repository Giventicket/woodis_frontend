import React from "react";

const style = {
  textAlign: "center",
  fontSize: "2rem",
};

const Logo = function () {
  return <div style={style}>Woodis</div>;
};
export default React.memo(Logo);
