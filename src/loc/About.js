import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Loc.css";
// import { Splide, SplideSlide } from "@splidejs/react-splide";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "70px",
        paddingBottom: "70px",
      }}
    >
      {/* <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
    >
      <SplideSlide>
        <img src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg" alt="Image 1"/>
      </SplideSlide>
      
    </Splide> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ justifyContent: "center" }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <div className="abtheading">
              You’re stuck at home but your ideas doesn’t have to be. Write some
              lines of code!
            </div>
            <div className="abtcontent">
              With over 200 participants from numerous colleges, the hackathon
              is a gathering where individual programmers collaborate their
              codes to make industry-grade projects.
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <img
              src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
              alt=""
              className="abtimg"
            />
            {/* <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
    >
      <SplideSlide>
        <img src="image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image3.jpg" alt="Image 3"/>
      </SplideSlide>
    </Splide> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;
