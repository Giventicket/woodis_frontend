const style = {
  textAlign: "center",
  fontSize: "1rem",
  color: "grey",
};

const Description = function ({ children }) {
  return <div style={style}>{children}</div>;
};
export default Description;
