import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { isTablet, isMobile } from "react-device-detect";
import cardList from "../libs/cardList";

const CreditCards = function () {
  let padding = false;
  if (!isTablet && isMobile) {
    padding = true;
  }
  return (
    <Box pl={8} pr={8}>
      {cardList.map((card, index) => (
        <>
          <Grid container key={index}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg
              xl
              style={{ textAlign: "center" }}
              key={index}
            >
              <img src={card.imgURL} alt="" />
            </Grid>
            {padding ? (
              <Grid item xs={12}>
                <Box pt={2} />
              </Grid>
            ) : null}
            <Grid
              item
              container
              direction="column"
              xs={12}
              sm={12}
              md={12}
              lg
              xl
            >
              <Grid item xs style={{ textAlign: "center", fontSize: "1.2rem" }}>
                <b>{card.name}</b>
              </Grid>
              <Grid item container xs>
                <Grid item xs={1} />
                {card.benefits.map((benefit, index) => (
                  <>
                    <Grid
                      container
                      direction="column"
                      item
                      xs
                      key={index}
                      style={{
                        outline: "auto",
                        borderColor: "blue",
                        paddingLeft: "0.25rem",
                        paddingRight: "0.25rem",
                        borderWidth: "2px",
                      }}
                    >
                      <Grid
                        item
                        xs
                        style={{
                          fontSize: "0.8rem",
                          textAlign: "center",
                        }}
                      >
                        <b>{`${benefit.title}`}</b>
                      </Grid>
                      <Grid
                        item
                        xs
                        style={{ fontSize: "0.6rem", textAlign: "center" }}
                      >{`[${benefit.detail}]`}</Grid>
                    </Grid>
                  </>
                ))}
                <Grid item xs={1} />
              </Grid>
              <Grid item xs></Grid>
            </Grid>
            {padding ? (
              <Grid item xs={12}>
                <Box pt={2} />
              </Grid>
            ) : null}
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              lg
              xl
              direction="column"
              style={{ placeSelf: "center", textAlign: "center" }}
              spacing={1}
            >
              <Grid item xs>
                <Button
                  variant="outlined"
                  fullWidth={true}
				  href={`/benefit/${index}`}
                  style={{
                    fontWeight: "700",
                    maxWidth: "15rem",
                    borderWidth: "3px",
                    borderColor: "black",
                  }}
                >
                  내가 이 카드를 썼더라면
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  href="https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S02.do"
                  target="_blank"
                  variant="contained"
                  fullWidth={true}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    maxWidth: "15rem",
                  }}
                >
                  자세히 보기
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  href="https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do"
                  variant="outlined"
                  target="_blank"
                  fullWidth={true}
                  style={{
                    backgroundColor: "#3FD0FF",
                    color: "white",
                    maxWidth: "15rem",
                  }}
                >
                  카드 신청
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <hr />
        </>
      ))}
    </Box>
  );
};

export default React.memo(CreditCards);
