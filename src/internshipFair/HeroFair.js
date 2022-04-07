import { Grid } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import CountUp from "react-countup";
import { CgArrowLongRight } from "react-icons/cg";
// import { motion } from 'framer-motion';

const HeroFair = () => {
  return (
    <div style={{ padding: "3%" }}>
      <Grid container spacing={1}>
        <Grid item sm={8} style={{ padding: "0% 1% 0% 4%" }}>
          <span className="heroSub">
            Land your <br />
            First Internship <br />
            At DJSCE ACM's
          </span>
          <br />
          <span className="heroFair">INTERNSHIP FAIR</span>
          <p className="extraHero">
            Sign In to get yourself registered and know more about
            the Internship opportunities and Job Profiles{" "}
          </p>
          <Button
            className="heroFairButton"
            variant="contained"
            size="large"
            style={{ backgroundColor: "#187271", fontSize: "18px" }}
          >
            Let's get Started <CgArrowLongRight style={{ fontSize: "2rem" }} />
          </Button>
          <div style={{fontSize:"20px", paddingTop:"20px"}}><span style={{color:"#2D3748"}}>Interested in providing internships? </span><span style={{color:"#006462", fontWeight:"700"}}>Join Us</span></div>
        </Grid>
        <Grid item sm={4} className="heroGridFair">
          {/* <div style={{backgroundColor:'#2ABEA2'}}></div> */}
        </Grid>
      </Grid>
      <div className="fairCount">
        <Grid container spacing={0}>
          <Grid item xs={4}>
            COMPANIES <br />
            <span>
              &nbsp;&nbsp; <CountUp end={30} duration={2} />+
            </span>
          </Grid>
          <Grid item xs={4}>
            INTERVIEWS ORGANISED <br />
            <span>
              <CountUp end={200} duration={2} />+
            </span>
          </Grid>
          <Grid item xs={4}>
            INTERNSHIPS LANDED
            <br />{" "}
            <span>
              <CountUp end={80} duration={2} />+
            </span>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroFair;
