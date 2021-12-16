import React, { useState } from "react";
import OurMission from "./Mission_array";
import "../HomePage.css";
import { Grid } from "@mui/material";
import { grid } from "@mui/system";

const Mission = () => {
  return (
    <>
      <div className="ourMission">
        <h2>Our Mission</h2>
        <div className="ourMissionContainer">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} ml={6} sx={{ justifyContent: "center", alignItems: 'center', columnGap: "0px" }}>
            {OurMission.map((mission) => {
              return (
                <Grid item xs={12} sm={4} md={4} mb={10} sx={{ backgroundColor: "transparent", marginRight: '0px' }} >
                  <div className="mission" >
                    <div className="missionImgContainer">
                      <img src={mission.image} className="missionImg" />
                    </div>
                    <i>{mission.description}</i>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Mission;
