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
        <div className="team">MEET OUR TEAM</div>
        <div className="quote">"Alone we can do so little, together we can do so much."</div>
        <div className="faculty">Faculty</div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{paddingTop:20}}>
        {OurCommittee.map((committee) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 330 }} className="comCard" >
              <CardMedia
                component="img"
                height="340"
                image={committee.image}
                alt="img"
                className="comImg"
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
        <Card sx={{ maxWidth: 330 }} className="comCard">
              <CardMedia
                component="img"
                height="300"
                image="https://media-exp1.licdn.com/dms/image/C510BAQELNP3C7vPtfA/company-logo_200_200/0/1581169344964?e=2159024400&v=beta&t=3iSJAnsEkS2Qcumcq3Z7UgvC5axKNqWLzKTnM-S4wQk"
                alt="img"
                className="comImg"
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
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{justifyContent:"center"}} style={{paddingTop:20}}>
        {Array.from(Array(2)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 330 }} className="comCard">
              <CardMedia
                component="img"
                height="300"
                image="https://media-exp1.licdn.com/dms/image/C510BAQELNP3C7vPtfA/company-logo_200_200/0/1581169344964?e=2159024400&v=beta&t=3iSJAnsEkS2Qcumcq3Z7UgvC5axKNqWLzKTnM-S4wQk"
                alt="img"
                className="comImg"
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
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{paddingTop:20}}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }} className="comCard">
              <CardMedia
                component="img"
                height="300"
                image="https://media-exp1.licdn.com/dms/image/C510BAQELNP3C7vPtfA/company-logo_200_200/0/1581169344964?e=2159024400&v=beta&t=3iSJAnsEkS2Qcumcq3Z7UgvC5axKNqWLzKTnM-S4wQk"
                alt="img"
                className="comImg"
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

