import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./EventPage.css";

const MainEvent = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div>
      <Header />
      <center>
        <div className="mainEvent">
          <h1>A flair to remember</h1>
          <h2>What is this event about?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div style={{ borderTop: "2px grey solid", width: "45%" }}></div>
        </div>
        <Grid container spacing={1} style={{ padding: "30px 10%" }}>
          <Grid item sm={6}>
            <img
              className="MainImg2"
              src="https://picsum.photos/seed/picsum/200/"
              alt="eventImg"
            ></img>
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img
                  className="MainImg"
                  src="https://picsum.photos/seed/picsum/200/"
                  alt="eventImg"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  src="https://picsum.photos/seed/picsum/200/"
                  alt="eventImg"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  style={{ opacity: ".2" }}
                  src="https://picsum.photos/seed/picsum/200/"
                  alt="eventImg"
                ></img>
                <div
                  style={{
                    transform: "translateY(-180px)",
                    fontSize: "2rem",
                    color: "white",
                  }}
                >
                  View Gallery
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </center>
      <Grid className="questions" container spacing={3}>
        <Grid item sm={6} xs={12}>
          <h2>When is it happening?</h2>
        </Grid>
        <Grid item sm={6} xs={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h2>What's in it for you?</h2>
        </Grid>
        <Grid item sm={6} xs={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ padding: "5px 10%" }}>
        <Grid item sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <img
                className="MainImg"
                src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <img
            className="MainImg2"
            src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ padding: "0 10%" }}>
        <Grid item xs={12}>
          {" "}
          <img
            className="MainImg"
            src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img
            className="MainImg"
            src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img
            className="MainImg"
            src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ padding: "5px 10%" }}>
        <Grid item sm={6}>
          <img
            className="MainImg2"
            src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <img
                className="MainImg"
                src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainEvent;
