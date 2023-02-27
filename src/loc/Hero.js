// import {useEffect} from "react";
import "./Loc.css";
import CountDown from "./countDown";
import { Grid, Button, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import Ring from "./Ring";
import Box from "./Box";
import { useEffect } from "react";
import arcana from "../Assets/arcana-logo.png";
function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <div
      id="heroTop"
      style={{ backgroundColor: "#000", textAlign: "center" }}
    >
      <center>
        <Grid container spacing={0} className="hero">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Canvas>{/* <Ring /> */}</Canvas>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className="heroHeading">LOC 5.0</h1>
            <p className="heroContent">Hosted by - DJSCE ACM Student Chapter</p>
            <a href="https://loc-lines-of-code.devfolio.co/"
            target="_blank"
            rel="noreferrer"
            >
              <div>
            <div
              class="apply-button"
              data-hackathon-slug="loc-lines-of-code"
              data-button-theme="dark-inverted"
              // style={{height: "44px", width: "312px"}}
            ></div>
              </div>
            </a>
            {/* <a href="https://loc-lines-of-code.devfolio.co/"
            target={"_blank"}
            rel="noreferrer"
            style={{textDecoration:'none'}}
            >
              <Button variant='contained' sx={{textTransform:'none', maxWidth:'312px', width:'100%', height:'44px', p:1}}>
                <Typography variant='h4' sx={{fontWeight:700}}>Apply with <img
                src="https://drive.google.com/uc?export=download&id=1uOeQAKm5FdEnpN3ZVH7rUUllxwt7zXkd"
                style={{ width: "40%", }}
                alt="devfolio"
              /> </Typography>
              </Button>
            </a> */}
            <p className="heroContentDate">
              11<sup>th</sup> - 12<sup>th</sup> March, 2023
            </p>
            <div className="platinum">
              <h4 style={{ paddingInline: "2%" }}> Powered by </h4>
              <img
                src="https://drive.google.com/uc?export=download&id=1uOeQAKm5FdEnpN3ZVH7rUUllxwt7zXkd"
                style={{ width: "15%", paddingBottom: "1%" }}
                alt="devfolio"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Canvas>{/* <Box /> */}</Canvas>
          </Grid>
        </Grid>
        <CountDown />
      </center>
    </div>
  );
}

export default Hero;
