import { Grid } from "@mui/material";
import React from "react";
import image from "./DJACMLOGO.png";
import { Link } from "react-router-dom";
const LocFooter = () => {
  return (
    <div
      style={{
        paddingTop: "20px",
        backgroundColor: "#001521",
        color: "white",
      }}
    >
      <Grid container>
        <Grid item sm={4}>
          <img className="footerAcmIcon" src={image} alt="acmIcon" />
        </Grid>
        <Grid item sm={4}>
          <p>Get involved</p>
          <li>PPT</li>
          <li>BLOGS</li>
          <Link to="/events" style={{ textDecoration: "none" }}>
            <li>EVENTS</li>
          </Link>
          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            <li>CONTACT US</li>
          </Link>
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    </div>
  );
};

export default LocFooter;
