import React from "react";
import NavLoc from "./navLoc";
import "./Loc.css";
import CountDown from "./countDown";
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
    <div style={{ backgroundColor: "#001521", transform: "translateY(-5px)" }}>
      <NavLoc />
      <center>
        <div className="hero">
          {/* <svg
          width="1373"
          height="729"
          viewBox="0 0 1373 729"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 -30V727H72.2133V20.4899H131.423V639.6H197.969V90.4793H260.846V588.066H322.152V172.282C409.761 172.282 845.259 172.282 1050.48 172.282"
            stroke="url(#paint0_linear_311_9)"
            stroke-width="4"
            className="left"
          />
          <path
            d="M1371 -30V727H1300.71V20.4899H1241.43V639.6H1174.81V90.4793H1111.86V588.066H1050.48V170.282"
            stroke="url(#paint1_linear_311_9)"
            stroke-width="4"
            className="right"
          />
          <defs>
            <linearGradient
              id="paint0_linear_311_9"
              x1="526.242"
              y1="-30"
              x2="526.242"
              y2="727"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF8A50" />
              <stop offset="0.0001" stop-color="#FF8A50" />
              <stop offset="1" stop-color="#FF8A50" />
              <stop offset="1" stop-color="#FF8A50" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_311_9"
              x1="1210.74"
              y1="-30"
              x2="1210.74"
              y2="727"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF8A50" />
              <stop offset="1" stop-color="#FF8A50" />
            </linearGradient>
          </defs>
        </svg> */}
          <h1 className="heroHeading">LOC 4.0</h1>
          <p className="heroContent">
            24 hour hackathon by Dwarkadas Jivanlal Sanghvi College of
            Engineering - Association of Computing Machinery
          </p>
          <div
            className="apply-button"
            data-hackathon-slug="lines-of-code-djacm"
            data-button-theme="light"
            // style="height: 44px; width: 312px"
          ></div>
          <p className="heroContentDate">25th - 27th February, 2021</p>
        </div>
        <CountDown />
      </center>
    </div>
  );
}

export default Hero;
