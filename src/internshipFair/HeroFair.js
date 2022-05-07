import {Grid} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import CountUp from "react-countup";
import {CgArrowLongRight} from "react-icons/cg";

const HeroFair = () => {
  return (
    <div style={{padding: "3%"}} className="hero">
      <Grid container spacing={1}>
        <Grid item sm={8} style={{padding: "0% 1% 0% 4%"}}>
          <p className="heroSub">
            Land your <br />
            First Internship <br />
            At DJSCE ACM's
          </p>
          <br />
          <p className="heroFair">INTERNSHIP FAIR 2022</p>
          <p className="extraHero">
            Register yourself and know more about the Internship opportunities
            and Job Profiles{" "}
          </p>
          <a
            href="http://20.25.77.217/if/form/"
            target="_blank"
            rel="noreferrer"
            style={{textDecoration: "none"}}
          >
            <div className="heroFairButton">
              <Button
                className="heroFairButton"
                variant="contained"
                size="large"
                style={{backgroundColor: "#187271", fontSize: "18px"}}
              >
                Let's get Started{" "}
                <CgArrowLongRight
                  style={{fontSize: "1.8rem", paddingLeft: "1rem"}}
                />
              </Button>
            </div>
          </a>
          {/* <div style={{ fontSize: "20px", paddingTop: "20px" }}>
            <span style={{ color: "#2D3748" }}>
              Interested in providing internships?{" "}
            </span>
            <a
              href="https://forms.gle/n6LhNHRWZLSxsXwHA"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#006462", fontWeight: "700" }}>
                Join Us
              </span>
            </a>
          </div> */}
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
