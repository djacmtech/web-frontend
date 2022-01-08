import React from "react";
import NavLoc from "./navLoc";
import './Loc.css'
import { Button } from "@mui/material";
import CountDown from "./countDown";
function Hero() {
  return (
    <div style={{ backgroundColor: "#001521", transform: "translateY(-5px)" }}>
      <NavLoc />
      <center>
      <div className="hero">
        <h1 className="heroHeading">LOC 4.0</h1>
        <p className="heroContent">24 hour hackathon by DJSCE ACM</p>
        <Button variant="contained" color="primary">Apply with Devfolio</Button>
        <p className="heroContentDate">25th - 27th February, 2021</p>
      </div>
      <CountDown/>
      </center>
    </div>
  );
}

export default Hero;
