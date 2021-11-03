import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OurMission from './Mission_array';

const Mission = () => {
  const [ourmission] = useState(OurMission);
  console.log(ourmission);

  return (
    <center>
      <div className="ourMission">
        <h1>Our Mission</h1>

        <Box sx={{ flexGrow: 1, paddingLeft: 25, paddingRight: 5 }} className="mission_box">
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {ourmission.map((props, id) => {
              return (
                <div key={id}>
                  <Grid className="mission_grid" item xs={40} sm={40} md={30} sx={{ padding:2}}>
                    <Card className="mission_card" sx={{ maxWidth: 345 }} >
                      <CardMedia className="mission_image"
                        component="img"
                        height="200"
                        image={props.image}
                        alt="img"
                      />
                      <CardContent>
                        <Typography className="mission_description" variant="body2" color="text.secondary">
                          {props.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </Box>
      </div>
    </center>
  );
};

export default Mission;
