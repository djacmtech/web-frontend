import React, { useState } from "react";
import OurMission from './Mission_array';
import { Grid } from "@mui/material";
import '../HomePage.css'

const Mission2 = () => {
  const [ourmission] = useState(OurMission);
  console.log(ourmission);

  return (
    <center>
      <div className="ourMission">
        <h1>Our Mission</h1>

        <Grid container spacing={3} className="Grid-card">
            {
                ourmission.map((props, id)=> {
                    return (
                        <Grid item key={id} xs={4} className="mission_grid">
                            <div>
                                <img src={props.image} alt={`Mission${id}`} className="Image"/>
                            </div>
                            <div className="Card-content">
                                <p> {props.description} </p>
                            </div>
                        </Grid>
                    )
                })
            }
        </Grid>
      </div>
    </center>
  );
};

export default Mission2;