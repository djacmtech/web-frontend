// import {useEffect} from "react";
import "./Loc.css";
import CountDown from "./countDown";
import {Grid} from '@mui/material';
import {Canvas} from '@react-three/fiber';
import Ring from "./Ring";
import Box from "./Box";
function Hero() {

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };

  // }, []);

  return (
    <div id="heroTop" style={{ backgroundColor: "#001521",height:'100vh',zIndex:'3', textAlign:'center' }}>
      <center>  
        <Grid container spacing={0} className="hero">
          <Grid item xs={12} sm={12} md={3} lg={3}>
              <Canvas>
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
              // style="height: 44px; width: 312px"
            />
            <p className="heroContentDate">12th - 13th March, 2022</p>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Canvas>
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
