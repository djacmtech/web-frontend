import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./InternshipFair.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import carousel1 from "../Assets/carousel1.jpeg";
import carousel2 from "../Assets/carousel2.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@mui/material";

function AboutFair() {
  return (
    <div
      style={{
        backgroundColor: "#001521",
        paddingBottom: "70px",
      }}
      id='About IF'
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ justifyContent: "center" }}
          className="abtgrid"
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
            {/* <Splide
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
                <img src={carousel1} alt="Carousel 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={carousel2} alt="Carousel 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={carousel3} alt="Carousel 3" />
              </SplideSlide>
              <SplideSlide>
                <img src={carousel4} alt="Carousel 4" />
              </SplideSlide>
            </Splide> */}
            {/* <img src={carousel1} alt="" style={{height:"200px", width:"400px", paddingLeft:"50px"}}></img> */}
            {/* <img src={carousel1} alt="" style={{height:"200px", width:"400px", paddingLeft:"50px"}}></img> */}

            <div class="image-stack">
              <div class="image-stack__item image-stack__item--top">
                <img
                  src={carousel2}
                  alt=""
                  className="imgFair"
                />
              </div>
              <div class="image-stack__item image-stack__item--bottom">
                <img
                  src={carousel1}
                  alt=""
                  className="imgFair"
                />
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={7} style={{ padding: "5%" }}>
            <div data-aos="fade-right" className="abtheading">
              We aim to bridge the gap between academia and the industry by
              promoting our learning by doing ethos.
            </div>
            <div data-aos="fade-right" className="abtcontent">
              The internship can be scheduled between June and July for one
              month of full-time work followed by part-time or work from the
              home model as negotiated between the company and the concerned
              student intern.
            </div>
            <Button
              style={{
                backgroundColor: "#187271",
                color: "#FFFFFF",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Know more about DJSCE ACM{" "}
              <AiOutlineArrowRight style={{ fontSize: "2rem" }} />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutFair;
