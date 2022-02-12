import React from "react";
import "./Loc.css";
import CountDown from "./countDown";
import Three from "./Three";
import {Canvas} from '@react-three/fiber';
function Hero() {
  React.useEffect(() => {
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
    <div id="heroTop" style={{ backgroundColor: "#001521",height:'100vh',zIndex:'3', textAlign:'center' }}>
      <center>
        <div className="hero">
          <h1 className="heroHeading">LOC 4.0</h1>
          <p className="heroContent">
          DJSCE ACM Student Chapter
          </p>
          <div
            className="apply-button"
            data-hackathon-slug="lines-of-code-djacm"
            data-button-theme="light"
            // style="height: 44px; width: 312px"
          ></div>
          <p className="heroContentDate">12th - 13th March, 2022</p>
        </div>
        <CountDown />
        <Canvas style={{height:'50%', width:'50%'}}>
        <Three/>
        </Canvas>
      </center>
    </div>
  );
}

export default Hero;
