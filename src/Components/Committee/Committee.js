import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Committee.css";
import OurCommittee from "./CommitteeArray";
import axios from "axios";
const onTop = () => {
  window.scrollTo(0, 0);
};

const Committee = () => {
  const [committee, setCommittee] = useState([]);

  useEffect(() => {
    onTop();

    (async () => {
      let comData;
      try {
        const response = await axios.get(
          "https://djacmdev.pythonanywhere.com/api/core_committee/"
        );
        comData = await response.data;
      } catch (error) {
        console.log(error);
        comData = [];
      }
      setCommittee(comData);
    })();
  }, []);

  return (
    <div style={{ backgroundColor: "#000324", margin: "0px", padding: "0px" }}>
      <Header activePage="Committee" />
      <center>
        <div className="team">MEET OUR TEAM</div>
        <div className="quote">
          "Alone we can do so little, together we can do so much."
        </div>
        <div className="faculty">Faculty</div>
        <Grid
          container
          style={{ justifyContent: "center", margin: '0px', padding: '0px' }}
        >
          {OurCommittee.map((committee) => (
            <Grid item xs={6} sm={4} md={4}>
              <Card sx={{ maxWidth: 330 }} className="comCard">
                <CardMedia
                  component="img"
                  height="340"
                  image={committee.image}
                  alt="img"
                  className="comImg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="comName"
                  >
                    {committee.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="comPosition"
                  >
                    {committee.position}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="faculty">Core</div>
        {committee.map((props) => {
          if (props.position === 1) {
            return (
              <Card
                sx={{ maxWidth: 330 }}
                className="comCardCp"
                key={props.position}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={props.pic.slice(0,-15)}
                  alt="img"
                  className="comImg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="comName"
                  >
                    {props.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="comPosition"
                  >
                    {props.post}
                  </Typography>
                </CardContent>
              </Card>
            );
          }
          return null;
        })}

        <Grid
          container
          style={{ paddingTop: 20, justifyContent: "center" }}
        >
          {committee.map((props) => {
            if (props.position > 1) {
              return (
                <Grid item xs={6} sm={4} md={4}>
                  <Card sx={{ maxWidth: 345 }} className="comCard">
                    <CardMedia
                      component="img"
                      height="300"
                      image={props.pic.slice(0,-15)}
                      alt="img"
                      className="comImg"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="comName"
                      >
                        {props.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="comPosition"
                      >
                        {props.post}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </center>
    </div>
  );
};

export default Committee;
