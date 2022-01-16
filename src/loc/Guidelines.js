import React from "react";
import Grid from "@mui/material/Grid";
import "./Loc.css";
const array = [
  {
    id: 1,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 2,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 4,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 5,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 6,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 7,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 8,
    contain:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
function Guidelines() {
  return (
    <div id="Guidelines" style={{ color: "black", backgroundColor: "white",padding:'0 8%' }}>

      <center>
      <h2 className="guidelineHeading">Guidelines</h2>
        <Grid container spacing={2}>
          {array.map((x) => {
            return (
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <div className="guidelines">
                  <span className="guideNumber">0{x.id}</span>
                  <br />
                  <p className="guideContain">{x.contain}</p>
                </div>
              </Grid>
            );
          })}
          {/* <Grid item md={4} sm={6}>
            1
          </Grid> */}
          {/* <Grid item md={4} sm={6}>
            2
          </Grid>
          <Grid item md={4} sm={6}>
            3
          </Grid>
          <Grid item md={4} sm={6}>
            4
          </Grid>
          <Grid item md={4} sm={6}>
            5
          </Grid>
          <Grid item md={4} sm={6}>
            5
          </Grid>
          <Grid item md={4} sm={6}>
            6
          </Grid>
          <Grid item md={4} sm={6}>
            7
          </Grid> */}
        </Grid>
      </center>
    </div>
  );
}

export default Guidelines;
