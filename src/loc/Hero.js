// import {useEffect} from "react";
import "./Loc.css";
import CountDown from "./countDown";
import {Grid} from '@mui/material';
import {Canvas} from '@react-three/fiber';
import Ring from "./Ring";
import Box from "./Box";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import arcana from "../Assets/arcana.png"
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
    <div id="heroTop" style={{ backgroundColor: "#001521",zIndex:'3', textAlign:'center' }}>
      <center>  
        <Grid container spacing={0} className="hero">
          <Grid item xs={12} sm={12} md={3} lg={3}>
              <Canvas>
                <OrbitControls/>
                <Ring/>
              </Canvas>
          </Grid> 
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className="heroHeading">LOC 4.0</h1>
            <p className="heroContent">
            DJSCE ACM Student Chapter
            </p>
            <div
              className="apply-button"
              data-hackathon-slug="lines-of-code-djacm"
              data-button-theme="light"
            />
            <p className="heroContentDate">12th - 13th March, 2022</p>
            <div className="platinum"> 
              <span style={{paddingInline:'4%'}}> Powered by </span>  
              <img src={arcana} style={{width:'12%'}} alt="arcana"/>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Canvas>
              <OrbitControls/>
              <Box/>
            </Canvas>
          </Grid> 
        </Grid>
        <CountDown />
      </center>
    </div>
  );
}

export default Hero;
