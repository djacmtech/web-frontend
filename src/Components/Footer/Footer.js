import { Button, Grid } from "@mui/material";
import React from "react";
import { IconContext } from "react-icons";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import {MdOutlineEmail} from 'react-icons/md'
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <div className="footerSection">
      {/* first part */}
      <div
        style={{
          marginBottom: "55px",
          backgroundColor: "#000324",
          color: "#dbdbdb",
        }}
      >
        <center>
          <h5>NEWSLETTER</h5>
          <h2>Get new offer's on your email <span style={{position:'relative',top:'5px'}}><MdOutlineEmail/>
          </span></h2>
          <h6>Put your email address and get started</h6>
          <input
            type="text"
            placeholder="Enter email address"
            className="footerEmail"
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000324",
              borderRadius: "40px",
              width: "120px",
              height: "50px",
              textTransform: "capitalize",
            }}
          >
            <h3>send</h3>
          </Button>
        </center>
      </div>

      {/* social media handles */}
      <div
        style={{
          paddingTop: "20px",
          backgroundColor: "#000324",
          color: "white",
          transform:'scale(1.02)'
        }}
      >
        <center>
          <Grid container spacing={1}>
            <Grid  style={{backgroundColor:'#000324'}}  item xs>
              <img className='footerAcmIcon' src='https://djacm.co.in/static/images/acm-white-logo.png' alt='acmIcon'/>
            </Grid>
            <Grid  style={{backgroundColor:'#000324'}}  item xs>
              <p>Get involved</p>
              <li>PPT</li>
              <li>BLOGS</li>
              <li>EVENTS</li>
              <li>CONTACT US</li>
            </Grid>
            <Grid  style={{backgroundColor:'#000324'}}  item xs>
              <p>Get in touch</p>
              <IconContext.Provider value={{ size: "1.7rem",className:'iconsFooter' }}>
                <li>
                  <BsInstagram /> 
                {/* </li>
                <li> */}
                  <BsFacebook />
                {/* </li>
                <li> */}
                  <BsLinkedin />
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
