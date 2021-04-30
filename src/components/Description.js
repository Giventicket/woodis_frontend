import React from "react";

const style = {
  textAlign: "center",
  fontSize: "1rem",
  color: "grey",
  alignSelf: "center",
};

const Description = function ({ children }) {
  return <div style={style}>{children}</div>;
};
export default React.memo(Description);
