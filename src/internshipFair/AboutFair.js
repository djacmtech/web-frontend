import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./InternshipFair.css";
import IFAbout1 from "../Assets/IFAbout1.jpg";
import IFAbout2 from "../Assets/IFAbout2.jpg";
import { CgArrowLongRight } from "react-icons/cg";
import { Button } from "@mui/material";

function AboutFair() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        // paddingBottom: "70px",
      }}
      id='About IF'
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

            <div class="image-stack">
              <div class="image-stack__item image-stack__item--top">
                <img
                  src={IFAbout2}
                  alt=""
                  className="imgFair"
                />
              </div>
              <div class="image-stack__item image-stack__item--bottom">
                <img
                  src={IFAbout1}
                  alt=""
                  className="imgFair"
                />
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={7} style={{ padding: "5% 5% 5% 10%" }}>
            <div data-aos="fade-right" className="fairheading">
              We aim to bridge the gap between academia and the industry by
              promoting our learning by doing ethos.
            </div>
            <div data-aos="fade-right" className="faircontent">
              The internship can be scheduled between June and July for one
              month of full-time work followed by part-time or work from the
              home model as negotiated between the company and the concerned
              student intern.
            </div>
            <Button
              style={{
                backgroundColor: "#187271",
                color: "#FFFFFF",
                fontSize: "18px",
                marginTop: "20px",
                padding:"10px"
              }}
            >
              Know more about DJSCE ACM{" "}
              <CgArrowLongRight style={{ fontSize: "2rem" }} />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutFair;
