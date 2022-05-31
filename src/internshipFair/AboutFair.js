import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./InternshipFair.css";
import IFAbout1 from "../Assets/IFAbout1.jpg";
import IFAbout2 from "../Assets/IFAbout2.jpg";
import { CgArrowLongRight } from "react-icons/cg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function AboutFair() {
  return (
    <div
      className="AbtFair"
      style={{
        backgroundColor: "#FFFFFF",
      }}
      id="About IF"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ justifyContent: "center" }}
          className="abtfairgrid"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            /*spacing={3}*/ style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-aos="fade-up"
          >
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--top">
                <img src={IFAbout2} alt="" className="imgFair" />
              </div>
              <div className="image-stack__item image-stack__item--bottom">
                <img src={IFAbout1} alt="" className="imgFair" />
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={7} style={{ padding: "5% 5% 5% 10%" }}>
            <div data-aos="fade-right" className="fairheading">
              ACM's Internship Fair's Legacy continues beyond.
            </div>
            <div data-aos="fade-right" className="faircontent">
              The Flagship Event of DJ-ACM, the Internship Fair, has provided internships to 100s of students in the past, and it continues this year, with tremendous internship offers waiting for you to grab them up.
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "#187271",
                  color: "#FFFFFF",
                  fontSize: "18px",
                  marginTop: "20px",
                  padding: "10px",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                }}
              >
                Know more about DJSCE ACM{" "}
                <CgArrowLongRight
                  style={{ fontSize: "1.8rem", paddingLeft: "1rem" }}
                />
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutFair;
