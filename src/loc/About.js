import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Loc.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import carousel1 from "../Assets/carousel1.jpeg";
import carousel2 from "../Assets/carousel2.jpeg";
import carousel3 from "../Assets/carousel3.jpg";
import carousel4 from "../Assets/carousel4.jpeg";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        paddingBottom: "70px",
      }}
    >

      <Box sx={{ flexGrow: 1 }}>
        {/* <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
        <div className="ball5"></div>
        <div className="ball6"></div>
        <div className="ball7"></div> */}
        <Grid
          container
          spacing={2}
          style={{ justifyContent: "center" }}
          className="abtgrid"
        >

          <Grid item sm={12} md={12} lg={7} style={{ padding: '5%' }}>
            <div data-aos="fade-right" className="abtheading">
              You&#39;re stuck at home but your ideas don&#39;t have to be.
              Write some <span style={{ color: '#ff1616' }}>
                lines of code!
              </span>
            </div>
            <div data-aos="fade-right" className="abtcontent">
              With over 500 participants from numerous colleges, the hackathon
              is a gathering where individual programmers collaborate their
              codes to make industry-grade projects.
            </div>
          </Grid>
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
            <Splide
              options={{
                rewind: true,
                lazyLoad: "nearby",
                gap: "1rem",
                autoplay: true,
                breakpoints: {
                  444: {
                    height: "60vw",
                    width: "100vw",
                  },
                },
              }}
            >
              <SplideSlide>
                <img
                  src={carousel1}
                  alt="Carousel 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={carousel2}
                  alt="Carousel 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={carousel3}
                  alt="Carousel 3"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={carousel4}
                  alt="Carousel 4"
                />
              </SplideSlide>
            </Splide>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;
