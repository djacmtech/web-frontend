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

const Committee = () => {
  const [committee, setCommittee] = useState([]);
  const baseUrl="http://137.135.78.87:8080/media"

  useEffect(() => {
    (async () => {
      let comData;
      try {
        const response = await axios.get(
          "http://137.135.78.87:8080/api/core_committee/"
        );
        comData = await response.data;
        // console.log(comData);
      } catch (error) {
        console.log(error);
        comData = [];
      }
      setCommittee(comData);
    })();
  }, []);

  return (
    <div style={{ backgroundColor: "#000324" }}>
      <Header activePage="Committee" />
      <center>
        <div className="team">MEET OUR TEAM</div>
        <div className="quote">
          "Alone we can do so little, together we can do so much."
        </div>
        <div className="faculty">Faculty</div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{justifyContent:"center"}}
        >
          {OurCommittee.map((committee) => (
            <Grid item xs={4} sm={4} md={4}>
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
                className="comCard"
                key={props.position}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image= {baseUrl.concat(props.pic)}
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
        })}

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ paddingTop: 20, justifyContent:"center" }}
        >
          {committee.map((props) => {
            if (props.position >1) {
              return (
                <Grid item xs={4} sm={4} md={4}>
                  <Card sx={{ maxWidth: 345 }} className="comCard">
                    <CardMedia
                      component="img"
                      height="300"
                      image={baseUrl.concat(props.pic)}
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
          })}
        </Grid>
      </center>
    </div>
  );
};

export default Committee;
