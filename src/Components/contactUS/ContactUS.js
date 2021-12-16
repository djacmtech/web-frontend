import React from "react";
import Header from "../Header/Header";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import {BsTelephoneForwardFill,BsArrowDown} from "react-icons/bs"
import {HiOutlineMail} from 'react-icons/hi'
import "./contactUs.css";

export const ContactUS = () => {
  return (
    <div style={{ backgroundColor: "#000324", paddingBottom: "30px" }}>
      <Header activePage="ContactUs" />
      <center>
        <h1 className="heading">GET IN TOUCH<BsArrowDown></BsArrowDown></h1>
        <Grid className='detail' container spacing={0}>
          <Grid  style={{backgroundColor:'#000324'}}  item md={6} sm={12}>
          <iframe className='map' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.002340483474!2d72.83433341393042!3d19.10755325594757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1638180891128!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
          </Grid>
          <Grid item md={6} sm={12} style={{backgroundColor:'#000324'}}>
            <div className="inputFields">
              <Grid container spacing={3}>
                <Grid  style={{backgroundColor:'#000324'}} item md={6} sm={6} xs={12}>
                  <label for="fname">First Name:</label>
                  <input name="fname" id="fname"></input>
                </Grid>
                <Grid  style={{backgroundColor:'#000324'}} item md={6} sm={6} xs={12}>
                  <label for="lname">Last Name:</label>
                  <input name="lname" id="lname"></input>
                </Grid>
                <Grid  style={{backgroundColor:'#000324'}}  item sm={6} xs={12}>
                  <label for="email">Email:</label>
                  <input id="email" type="email" name="email"></input>
                </Grid>
                <Grid  style={{backgroundColor:'#000324'}}  item sm={6} xs={12}>
                  <label for="subject">Subject:</label>
                  <input id="subject" name="subject"></input>
                </Grid>
                <Grid  style={{backgroundColor:'#000324'}}  item xs={12}>
                  <label for="message">Message:</label>
                  <input id="message" name="message"></input>
                </Grid>
              </Grid>
            </div>
            <br />
            <Button
              style={{
                backgroundColor: "#FA4239",
                width: "160px",
                borderRadius: "20px",
                fontSize:'1.2rem'
              }}
              variant="contained"
            >
              Submit
            </Button>
            <br/>
            <Grid className='contact' container spacing={3}>
              <Grid  style={{backgroundColor:'#000324'}}  item sm={6} xs={12}>
                <h2>
                  D. J. Sanghvi College of Engineering, Vile Parle (W), Mumbai.{" "}
                </h2>
              </Grid>
              <Grid  style={{backgroundColor:'#000324'}}  item sm={6} xs={12}>
                <p><BsTelephoneForwardFill/> +91 99877 48170</p>
                <p><BsTelephoneForwardFill/> +91 98197 05248</p>
                <p><HiOutlineMail/> coreacm@gmail.com</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </center>
    </div>
  );
};
