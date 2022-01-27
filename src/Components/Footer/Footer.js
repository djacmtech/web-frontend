import { Button, Grid } from "@mui/material";
import React from "react";
import { IconContext } from "react-icons";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import image from "../Header/DJACMLOGO.png";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <div className="footerSection">
      {/* first part */}
      {/* <div
        style={{
          marginBottom: "55px",
          backgroundColor: "#000324",
          color: "#dbdbdb",
        }}
      >
        <center>
          <h5>NEWSLETTER</h5>
          <h2>
            Get new offer's on your email{" "}
            <span style={{ position: "relative", top: "5px" }}>
              <MdOutlineEmail />
            </span>
          </h2>
          <h6>Put your email address and get started</h6>
          <input
            type="text"
            placeholder="Enter email address"
            className="footerEmail"
          />
          <Button
            variant="contained"
            style={{
              color: "#000324",
              backgroundColor: "white",
              borderRadius: "40px",
              width: "120px",
              height: "50px",
              margin:"20px",
              textTransform: "capitalize",
            }}
          >
            <h3>send</h3>
          </Button>
        </center>
      </div> */}

      {/* social media handles */}
      <div
        style={{
          paddingTop: "20px",
          backgroundColor: "#000324",
          color: "white",
          transform: "scale(1.02)",
        }}
      >
        <center>
          <Grid container spacing={1}>
            <Grid style={{ backgroundColor: "#000324" }} item sm={4} xs={12}>
              <img className="footerAcmIcon" src={image} alt="acmIcon" />
            </Grid>
            <Grid style={{ backgroundColor: "#000324" }} item sm={4} xs={12}>
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
            <Grid style={{ backgroundColor: "#000324" }} item sm={4} xs={12}>
              <p>Get in touch</p>
              <IconContext.Provider
                value={{ size: "1.7rem", className: "iconsFooter" }}
              >
                <li className="footerSocial">
                  <a
                    href="https://www.instagram.com/djsanghvi_acm/?hl=en"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsInstagram />
                  </a>
                  {/* </li>
                <li> */}
                  <a
                    href="https://www.facebook.com/djscoe.acm.5"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsFacebook />
                  </a>
                  {/* </li>
                <li> */}
                  <a
                    href="https://in.linkedin.com/company/dj-sanghvi-acm"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                </li>
              </IconContext.Provider>
            </Grid>
          </Grid>
          {/* copyright */}
          <h6
            style={{ color: " #dbdbdb91", padding: "5px", fontSize: ".8rem" }}
          >
            &copy;
            {new Date().getFullYear()} DJSCE ACM -- All Rights Reserved
          </h6>
        </center>
      </div>
    </div>
  );
};

export default Footer;
