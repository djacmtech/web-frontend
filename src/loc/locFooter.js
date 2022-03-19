import {Grid} from "@mui/material";
import React from "react";
import image from "../Assets/DJACMLOGO.png";
import {BsInstagram, BsFacebook, BsLinkedin} from "react-icons/bs";
import {Link} from "react-scroll";
const LocFooter = () => {
  const pages = [
    "Prizes",
    "Domain",
    "Timeline",
    "Guidelines",
    "Sponsors",
    "FAQS",
  ];
  return (
    <div
      style={{
        paddingTop: "20px",
        backgroundColor: "#001521",
        color: "white",
      }}
    >
      <center>
        <Grid container className="locNav" spacing={3}>
          <Grid item sm={3} xs={12}>
            <p>ABOUT US</p>
            <img
              width="120"
              src={image}
              alt="logo"
              style={{transform: "translateX(-10px)"}}
            ></img>
            <h6 className="aboutFooter">
              Don't let us convince you about our success. Let our three
              consecutive Best Student Chapter of the Year awards do the
              talking.
            </h6>
          </Grid>
          <Grid item sm={3} xs={12}>
            <p>Navigation</p>
            <Grid container spacing={3}>
              {pages.map(x => {
                return (
                  <Grid item xs={6} style={{cursor: "pointer"}}>
                    <Link
                      to={x}
                      spy={true}
                      smooth={true}
                      style={{
                        fontSize: ".9rem",
                        padding: "4% 1%",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      {/* <BiRightArrow></BiRightArrow> */}
                      {x}
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item sm={3} xs={12}>
            <p>Location</p>
            <h6 className="locationData">
              No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, JVPD
              Scheme, Vile Parle, Mumbai, Maharashtra 400056 .India
            </h6>
            <a
              style={{textDecoration: "none"}}
              rel="noreferrer"
              href="mailto:coreacm@gmail.com"
              target="_blank"
            >
              {" "}
              <h6 className="locationMail">coreacm@gmail.com</h6>
            </a>
          </Grid>
          <Grid item sm={3} xs={12}>
            <p>Follow us</p>
            <a
              href="https://www.instagram.com/djsanghvi_acm/?hl=en"
              rel="noreferrer"
              target="_blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/djscoe.acm.5"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a
              href="https://in.linkedin.com/company/dj-sanghvi-acm"
              rel="noreferrer"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </Grid>
        </Grid>
        <h4 style={{padding: "0 0 1.5% 0"}}>
          Made with <span style={{color: "red"}}>❤</span> from Team ACM
        </h4>
      </center>
    </div>
  );
};

export default LocFooter;
