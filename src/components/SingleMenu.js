import React from "react";
import { Grid } from "@material-ui/core";
import useFadeIn from "../libs/useFadeIn";

const SingleMenu = function ({ children, description }) {
  return (
    <Grid
      container
      justify="center"
      style={{
        backgroundColor: "white",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{ width: "16rem", paddingRight: "2rem", alignSelf: "center" }}
      >
        {description}
      </div>
      {children}
    </Grid>
  );
};
export default React.memo(SingleMenu);
