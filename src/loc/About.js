import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Loc.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000, once:"true" });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        // paddingTop: "70px",
        paddingBottom: "70px",
        // height:"100vh",
      }}
    >
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="ball3"></div>
      <div className="ball4"></div>
      <div className="ball5"></div>
      <div className="ball6"></div>
      <div className="ball7"></div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          style={{ justifyContent: "center" }}
          className="abtgrid"
        >
          <Grid item sm={12} md={12} lg={8}>
            <div data-aos="fade-right" className="abtheading">
              You&#39;re stuck at home but your ideas doesn&#39;t have to be.
              Write some lines of code!
            </div>
            <div data-aos="fade-right" className="abtcontent">
              With over 200 participants from numerous colleges, the hackathon
              is a gathering where individual programmers collaborate their
              codes to make industry-grade projects.
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            /*spacing={3}*/ style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-aos="fade-left"
          >
            <Splide
              options={{
                rewind: true,
                lazyLoad: "nearby",
                gap: "1rem",
                autoplay: true,
              }}
            >
              <SplideSlide>
                <img
                  src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
                  alt="Carousel 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
                  alt="Carousel 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
                  alt="Carousel 3"
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
