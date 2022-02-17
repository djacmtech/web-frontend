import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Loc.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#001521",
        paddingBottom: "70px",
      }}
    >

      <Box sx={{ flexGrow: 1 }}>
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
        <div className="ball5"></div>
        <div className="ball6"></div>
        <div className="ball7"></div>
        <Grid
          container
          spacing={1}
          style={{ justifyContent: "center" }}
          className="abtgrid"
        >

          <Grid item sm={12} md={12} lg={8}>
            <div data-aos="fade-right" className="abtheading">
              You&#39;re stuck at home but your ideas doesn&#39;t have to be.
              Write some <span style={{color:'#FF8A50'}}>
              lines of code!
              </span> 
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
                  src="https://lh3.googleusercontent.com/pw/AM-JKLUxs25noY68zRrw-qKvNNHL-WfBu52zUJm4Bt7dh8CGyy5uSFeM6HwRHK6HdSaFALfYp9E3LZ42rGfrrGgUM2CsRRB61y5LGfDmxgvKeENQZ4aAuVp1xFL7TGPqV8vgxzSGtCF0jvNEYI82yeV6zeeBJw=w1204-h903-no?authuser=0"
                  alt="Carousel 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://lh3.googleusercontent.com/pw/AM-JKLX6d5wdSUI_m6kFQCv07aoQWrzWt5DOjPbanrA92q4p5IwSSZrBQzy6vDLizE3-Ny_hp7spen3gZ6pz_1gQTJI4vg8o0fAakcYV_5dglbEvscnA_3cyUQhpw6k4LJFMG8NkgN9vXVUiwmktUmb5M868yg=w1034-h903-no?authuser=0"
                  alt="Carousel 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://lh3.googleusercontent.com/pw/AM-JKLUtCr9h3sc7ADaknHDLRFe2HQ1NmotDN32D9GGamjOaXXIH6ub6m94CKxWh1Cc-Lc0R7IRhDOivzkMw_446tFmc37iYh6UVGYgW52GqXTIibCMnIw78qEmarpsc9SF0OlPVo5QuT0Nr3vrh59_R4BFRZA=w1204-h903-no?authuser=0"
                  alt="Carousel 3"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://lh3.googleusercontent.com/pw/AM-JKLUa_7mleD2_18wDGwxGk5qlHONazHpkqciY3ggAItxG5tA3OVSS28iagnmvrAfMgFl7829HWdp6bbVfOwzYqKgjeViOGx-6N5w4wV3Zswz-NTfBEdOe0kSGfrDVFHDKK17S_lx7P8k6wdiOKqL3M-0M7g=w1204-h903-no?authuser=0"
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
