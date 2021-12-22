import React from "react";
import Header from "../Header/Header";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Committee.css";
import OurCommittee from "./CommitteeArray";

const Committee = () => {
  return (
    <div style={{ backgroundColor: "#000324", paddingBottom: "30px" }}>
      <Header activePage="Committee" />
      <center>
        <h1>MEET OUR TEAM</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci, debitis mollitia quaerat natus consequuntur.</h2>
        <h1>Faculty</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{paddingTop:20}}>
        {OurCommittee.map((committee) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 340 }} className="comCard">
              <CardMedia
                component="img"
                height="300"
                image={committee.image}
                alt="img"
                style={{borderRadius:"50%"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="comName">
                  {committee.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="comPosition">
                  {committee.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          ))}
        </Grid>
        <h1>Core</h1>
        <Card sx={{ maxWidth: 340 }} className="comCard">
              <CardMedia
                component="img"
                height="300"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="img"
                style={{borderRadius:"50%"}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="comName">
                  Deap Daru
                </Typography>
                <Typography variant="body2" color="text.secondary" className="comPosition">
                  Chair Person
                </Typography>
              </CardContent>
            </Card>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{justifyContent:"center"}}>
        {Array.from(Array(2)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 340 }} className="comCard">
              <CardMedia
                component="img"
                height="300"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="comName">
                  Deap Daru
                </Typography>
                <Typography variant="body2" color="text.secondary" className="comPosition">
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
            <Card sx={{ maxWidth: 345 }} className="comCard">
              <CardMedia
                component="img"
                height="300"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="comName">
                  Deap Daru
                </Typography>
                <Typography variant="body2" color="text.secondary" className="comPosition">
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

