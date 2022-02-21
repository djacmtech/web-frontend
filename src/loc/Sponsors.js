import { Grid } from "@mui/material";
import React from "react";
import logo1 from '../Assets/xyz.png';
import logo2 from '../Assets/taskade-logo.png'
import logo3 from '../Assets/SYBGEN.png'
import logo4 from '../Assets/jb_beam.png'
import logo5 from '../Assets/InterviewBuddy.png'
import logo6 from '../Assets/clickup logo - white text@2x.png'
import logo7 from '../Assets/cb_grey_small.png'
import logo8 from '../Assets/cake_logo_white_on_blue.png'
import logo9 from '../Assets/balsamiq-logo.png'
import logo10 from '../Assets/1P-logo.png'


function Sponsors() {
  return (
    <div
      id="Sponsors"
      style={{
        backgroundColor: "#001521",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4%",
      }}
    >
      <h1
        style={{
          fontFamily: "Righteous",
          color: 'white',
          // backgroundImage:
          //   "linear-gradient(180deg, #FF8A50 22.99%, #F54951 79.15%)",
          // backgroundClip: "text",
          // WebkitTextFillColor: "transparent",
          // WebkitBackgroundClip: "text",
          marginTop: "4%",
        }}
        data-aos="fade-right"
      >
        Sponsors
      </h1>
      <div className="goldSponsors">
        <h5 style={{ textAlign: "center" }}> Gold Sponsors</h5>
        <div data-aos="fade-up">
          <Grid
            container
            spacing={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item>
              <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
                <img
                  src="https://drive.google.com/uc?export=download&id=1uOeQAKm5FdEnpN3ZVH7rUUllxwt7zXkd"
                  alt="devfolio"
                  style={{ width: "200px" }}
                />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://polygon.technology/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=1q9AAOI40QJW1Fi5MaeYK3esfz1hhG8Zm"
                  alt="polygon"
                  style={{ width: "200px" }}
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="silverSponsors">
        <h5 style={{ textAlign: "center" }}> Silver Sponsors </h5>
        <div data-aos="fade-up">
          <Grid
            container
            spacing={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item>
              <a href="https://celo.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://drive.google.com/uc?export=download&id=1sS7IG73jrpKUq8oLaTPsIcNeq4uzgSJS"
                  alt="celo"
                  style={{ width: "200px" }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://tezos.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://drive.google.com/uc?export=download&id=1_LeBv0BPwHgCYiG3l2pH8db41pATZ32N"
                  alt="tezos"
                  style={{ width: "200px" }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://filecoin.io/" target="_blank" rel="noreferrer">
                <img
                  src="https://drive.google.com/uc?export=download&id=1LrLF1a4ROUJSklxJXSUU-gT6c17lrEbZ"
                  alt="filecoin"
                  style={{ width: "200px" }}
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <h5 style={{ textAlign: "center", fontSize: '2rem' }}> Tech Partners </h5>
        <div data-aos="fade-up">
          <Grid
            container
            spacing={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
                <img
                  src={logo1}
                  alt="Gen.xyz"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://interviewbuddy.in/" target="_blank" rel="noreferrer">
                <img
                  src={logo5}
                  alt="Interview Buddy"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src={logo3}
                  alt="SYBGEN"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://www.taskade.com/" target="_blank" rel="noreferrer">
                <img
                  src={logo2}
                  alt="Taskade"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://www.jetbrains.com/" target="_blank" rel="noreferrer">
                <img
                  src={logo4}
                  alt="JetBrains"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://clickup.com/" target="_blank" rel="noreferrer">
                <img
                  src={logo6}
                  alt="ClickUP"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://codingblocks.com/" target="_blank" rel="noreferrer">
                <img
                  src={logo7}
                  alt="CodingBlocks"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://www.interviewcake.com/" target="_blank" rel="noreferrer">
                <img
                  src={logo8}
                  alt="Interview Cake"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://balsamiq.com/" target="_blank" rel="noreferrer">
                <img
                  src={logo9}
                  alt="balsamiq"
                  style={{ width: "150px" }}
                />
              </a>
            </Grid>
            <Grid item md={3} xs={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <a href="https://1password.com/" target="_blank" rel="noreferrer">
                <img
                  src={logo10}
                  alt="1Password"
                  style={{ width: '150px' }}
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
