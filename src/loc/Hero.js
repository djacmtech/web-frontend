// import {useEffect} from "react";
import "./Loc.css";
import CountDown from "./countDown";
import { Button, Grid, Typography } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import Ring from "./Ring";
import Box from "./Box";
import { useEffect } from "react";
import arcana from "../Assets/arcana-logo.png"
function Hero() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

  }, []);

  return (
    <div id="heroTop" style={{ backgroundColor: "#001521", zIndex: '3', textAlign: 'center' }}>
      <center>
        <Grid container spacing={0} className="hero">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Canvas>
              <Ring />
            </Canvas>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className="heroHeading">LOC 5.0</h1>
            <p className="heroContent">
              Hosted by - DJSCE ACM Student Chapter
            </p>
            <div
              className="apply-button"
              data-hackathon-slug="lines-of-code-djacm"
              data-button-theme="light"
            />
            {/* <Button variant="contained">
              <Typography variant="h5">
              Sign up now
              </Typography>
            </Button> */}
            <p className="heroContentDate">11th - 12th March, 2023</p>
            <div className="platinum">
              <h4 style={{ paddingInline: '2%' }}> Powered by </h4>
              <img src={arcana} style={{ width: '15%', paddingBottom: '1%' }} alt="arcana" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Canvas>
              <Box />
            </Canvas>
          </Grid>
        </Grid>
        <CountDown />
      </center>
    </div>
  );
}

export default Hero;
