import React from "react";
import Header from "../Header/Header";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Committee = () => {
  return (
    <div style={{ backgroundColor: "#000324", paddingBottom: "30px" }}>
      <Header activePage="Committee" />
      <center>
        <h1>Meet Our Team</h1>
        <h4>hie hello</h4>
        <h1>Faculty</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Deap Daru
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Chair Person
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          ))}
        </Grid>
        <h1>Core</h1>
        <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Deap Daru
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Chair Person
                </Typography>
              </CardContent>
            </Card>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{justifyContent:"center"}}>
        {Array.from(Array(2)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Deap Daru
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Chair Person
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          ))}
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Deap Daru
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Chair Person
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          ))}
        </Grid>
      </center>
    </div>
  );
};

export default Committee;
