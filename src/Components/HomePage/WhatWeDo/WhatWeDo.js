import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Theme from "./WhatWeDo_array";

const WhatWeDo = () => {
  const [theme] = useState(Theme);
  console.log(theme);

  return (
    <center>
      <div className="whatWeDo">
        <h1>What We Do</h1>

        <Box
          sx={{ flexGrow: 1, flexDirection: "column", paddingLeft: 10}}
          className="work_box"
        >
          <Grid
            container
            spacing={{ xs: 0.5, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {theme.map((e, id) => {
              return (
                <div key={id}>
                  <Grid item xs={30} sm={20} md={30} sx={{ padding: 1 }}>
                    <Card
                      style={{
                        backgroundColor: "#000324",
                      }}
                      className="work_card"
                      sx={{ maxWidth: 345 }}
                    >
                      <CardMedia
                        className="work_image"
                        component="img"
                        height="200"
                        image={e.image}
                        alt="img"
                      />
                      <CardContent className="work_content">
                        <Typography
                          classsName="work_title"
                          gutterBottom
                          variant="h5"
                          // style={{textDecoration:'underline'}}
                          component="div"
                        >
                          {e.title}
                        </Typography>
                        <p style={{color:'#dbdbdbc2'}}>
                        {e.description}
                        </p>
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
