import React, { useState } from "react";
import OurMission from "./Mission_array";
import "../HomePage.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Mission = () => {
  return (
    <>
      <div className="ourMission">
        <h2>Our Mission</h2>
        <div className="ourMissionContainer">
          {/* {OurMission.map((mission) => {
            if (mission.id < 4) {
              return (
                <div className="mission">
                  <div className="missionImgContainer">
                    <img src={mission.image} className="missionImg" />
                  </div>
                  <i>{mission.description}</i>
                </div>
              );
            } else {
              return (
                <div className="mission">
                  <div className="missionImgContainer">
                    <img src={mission.image} className="missionImg" />
                  </div>
                  <i>{mission.description}</i>
                </div>
              );
            }
          })} */}
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>
          {OurMission.map((mission) => {
            return(
              
              <div className="mission">
                <Grid item xs={2} sm={4} md={4}>
                <div className="missionImgContainer">
                    <img src={mission.image} className="missionImg" />
                  </div>
                  <i className="missionDes">{mission.description}</i>
                </Grid>
              </div>
            )
  })}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};
export default Mission;
