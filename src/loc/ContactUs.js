import { Grid } from "@mui/material";
import React from "react";
import "./Loc.css";
import { AiFillMail, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

function ContactUs() {
  return (
    <div
      id='Contact Us'
      style={{
        // background: "linear-gradient(179.94deg, #ff1616 -1.24%, #af0203 64.13%)",
        backgroundColor: "#000000",
        padding: "1rem",
      }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          columnGap={2}
          style={{
            padding: "2%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <h1
            className='contactHeading'
            style={{ color: "white", textAlign: "left", marginLeft: "-50px" }}
            data-aos='fade-right'>
            {" "}
            Contact Us{" "}
          </h1>
          <div
            style={{
              fontFamily: "montserrat",
              fontSize: "17px",
              color: "#FFFFFF",
            }}>
            <div data-aos='fade-right'>
              {" "}
              <h2 style={{ textAlign: "left", fontFamily: "righteous" }}> EMAIL </h2>
              <a
                style={{ color: "#fff", textDecoration: "none" }}
                rel='noreferrer'
                href='mailto:coreacm@gmail.com'
                target='_blank'>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center" /*, padding:'3px'*/,
                  }}>
                  <div>
                    {" "}
                    <AiFillMail style={{ fontSize: "30px", color: "#ff1616" }} />
                  </div>
                  <div style={{ paddingLeft: "20px", fontSize: "20px" }}>coreacm@gmail.com</div>
                </div>
              </a>
            </div>
            <div style={{ textAlign: "left" }} data-aos='fade-right'>
              <h2 style={{ fontFamily: "righteous" }}> PHONE </h2>
              <a style={{ color: "#fff", textDecoration: "none" }} href='tel:+91 9323706633'>
                <p style={{ fontSize: "20px", color: "#FFFFFF" }}> Rishi Doshi | +91 9323706633 </p>
              </a>
              <a style={{ color: "#fff", textDecoration: "none" }} href='tel:+91 9920926902'>
                <p style={{ fontSize: "20px", color: "#ffffff" }}>
                  {" "}
                  Praniket Walavalkar | +91 9920926902{" "}
                </p>
              </a>
            </div>
            <div style={{ textAlign: "left" }} data-aos='fade-right'>
              {" "}
              <h2 style={{ fontFamily: "righteous" }}> SOCIALS </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}>
                <div>
                  {" "}
                  <a href='https://djacm.co.in/'>
                    {" "}
                    <BsGlobe2
                      style={{
                        fontSize: "35px",
                        color: "red",
                        padding: "3px 8px 3px 0px",
                      }}
                    />{" "}
                  </a>{" "}
                </div>
                <div>
                  {" "}
                  <a href='https://www.instagram.com/djsanghvi_acm/'>
                    {" "}
                    <AiFillInstagram
                      style={{
                        fontSize: "40px",
                        color: "red",
                        padding: "3px 8px 3px 8px",
                      }}
                    />{" "}
                  </a>{" "}
                </div>
                <div>
                  {" "}
                  <a href='https://www.linkedin.com/company/dj-sanghvi-acm/mycompany/'>
                    {" "}
                    <AiFillLinkedin
                      style={{
                        fontSize: "40px",
                        color: "red",
                        padding: "3px 8px 3px 8px",
                      }}
                    />{" "}
                  </a>{" "}
                </div>
                <div>
                  {" "}
                  <a href='https://www.facebook.com/djscoeacm'>
                    {" "}
                    <AiFillFacebook
                      style={{
                        fontSize: "40px",
                        color: "red",
                        padding: "3px 8px 3px 8px",
                      }}
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <iframe
            className='map'
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.002340483474!2d72.83433341393042!3d19.10755325594757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1638180891128!5m2!1sen!2sin'
            loading='lazy'
            style={{ height: "500px", width: "650px", padding: "5% 5% 5% 5%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;
