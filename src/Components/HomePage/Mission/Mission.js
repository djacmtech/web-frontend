import React, { useState } from "react";
import OurMission from "./Mission_array";
import "../HomePage.css";
import { Grid, Box } from "@mui/material";

const Mission = () => {
  return (
    <>
      <div className="MissionContainer" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '9%', marginBottom: '9%', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 'bolder', marginBottom: '2%' }}>Our Mission</h2>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', width: '80%' }} spacing={5}>
          {
            OurMission.map((mission) => {
              return <Grid item key={mission.id} md={4} xs={12} sm={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', backgroundColor: '#201F45', padding: '5%', height: '150px', borderRadius: '4px' }}>
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white', width: '54px', height: '54px', borderRadius: '4px', padding: '2px' }}>
                      <img src={mission.image} style={{ width: '54px', height: '54px' }} />
                    </Box>
                  </Box>
                  <i>{mission.description}</i>
                </Box>
              </Grid>
            })
          }
        </Grid>
      </div>
    </>
  );
};
export default Mission;
