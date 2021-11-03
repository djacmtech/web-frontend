import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Theme from './WhatWeDo_array';

const WhatWeDo = () => {
  const [theme] = useState(Theme);
  console.log(theme);

  return (
    <center>
      <div>
        <h1>What We Do</h1>

        <Box sx={{ flexGrow: 1, paddingLeft: 3}}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {theme.map((e, id) => {
              return (
                <div key={id}>
                  <Grid item xs={40} sm={40} md={30} sx={{ padding:2 }}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="120"
                        image=""
                        alt="img"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {e.title} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {e.description}
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

export default WhatWeDo;
