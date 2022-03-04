import {Grid, Tooltip} from "@mui/material";
import React from "react";
import logo1 from "../Assets/xyz.png";
import logo2 from "../Assets/taskade-logo.png";
import logo3 from "../Assets/SYBGEN.png";
import logo4 from "../Assets/jb_beam.png";
import logo5 from "../Assets/InterviewBuddy.png";
import logo6 from "../Assets/clickup logo - white text@2x.png";
import logo8 from "../Assets/cake_logo_white_on_blue.png";
import logo9 from "../Assets/balsamiq-logo.png";
import logo10 from "../Assets/1P-logo.png";
import logo0 from "../Assets/arcana.png";
import cutistic from "../Assets/CutisticLogo.jpg";
import bakehouse from "../Assets/bakehouse.png";
import GMC from "../Assets/GMC.png";

function Sponsors() {
  return (
    <div
      className="mobileview"
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
          color: "white",
          marginTop: "4%",
        }}
        data-aos="fade-right"
      >
        Sponsors
      </h1>
      <div className="platinumSponsors">
        <h5 style={{textAlign: "center"}} data-aos="fade-up">
          {" "}
          Platinum Sponsors
        </h5>
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
              <a
                href="https://arcana.network/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip title="Arcana Network" arrow placement="top">
                  <img
                    src={logo0}
                    alt="Arcana Network"
                    style={{width: "150px"}}
                  />
                </Tooltip>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="goldSponsors">
        <h5 style={{textAlign: "center"}} data-aos="fade-up">
          {" "}
          Gold Sponsors
        </h5>
        <Grid
          container
          spacing={6}
          data-aos="fade-up" /*data-aos-delay="400"*/
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item>
            <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
              <Tooltip title="Devfolio" arrow placement="top">
                <img
                  src="https://drive.google.com/uc?export=download&id=1uOeQAKm5FdEnpN3ZVH7rUUllxwt7zXkd"
                  alt="Devfolio"
                  style={{width: "200px"}}
                />
              </Tooltip>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://polygon.technology/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Polygon" arrow placement="top">
                <img
                  src="https://drive.google.com/uc?export=download&id=1q9AAOI40QJW1Fi5MaeYK3esfz1hhG8Zm"
                  alt="Polygon"
                  style={{width: "200px"}}
                />
              </Tooltip>
            </a>
          </Grid>
        </Grid>
      </div>
      <div className="silverSponsors">
        <h5 style={{textAlign: "center"}} data-aos="fade-up">
          {" "}
          Silver Sponsors{" "}
        </h5>
        <Grid
          container
          spacing={6}
          data-aos="fade-up" /*data-aos-delay="400"*/
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item>
            <a href="https://celo.org/" target="_blank" rel="noreferrer">
              <Tooltip title="Celo" arrow placement="top">
                <img
                  src="https://drive.google.com/uc?export=download&id=1sS7IG73jrpKUq8oLaTPsIcNeq4uzgSJS"
                  alt="Celo"
                  style={{width: "200px"}}
                />
              </Tooltip>
            </a>
          </Grid>
          <Grid item>
            <a href="https://tezos.com/" target="_blank" rel="noreferrer">
              <Tooltip title="Tezos" arrow placement="top">
                <img
                  src="https://drive.google.com/uc?export=download&id=1_LeBv0BPwHgCYiG3l2pH8db41pATZ32N"
                  alt="Tezos"
                  style={{width: "200px"}}
                />
              </Tooltip>
            </a>
          </Grid>
          <Grid item>
            <a href="https://filecoin.io/" target="_blank" rel="noreferrer">
              <Tooltip title="FileCoin" arrow placement="top">
                <img
                  src="https://drive.google.com/uc?export=download&id=1LrLF1a4ROUJSklxJXSUU-gT6c17lrEbZ"
                  alt="FileCoin"
                  style={{width: "200px"}}
                />
              </Tooltip>
            </a>
          </Grid>
        </Grid>
      </div>
      <div className="partners">
        <h5 style={{textAlign: "center"}} data-aos="fade-up">
          Technical Partners
        </h5>
        <Grid
          container
          spacing={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
              <Tooltip title="Gen.xyz" arrow placement="top">
                <img src={logo1} alt="Gen.xyz" style={{width: "150px"}} />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://interviewbuddy.in/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Interview Buddy" arrow placement="top">
                <img
                  src={logo5}
                  alt="Interview Buddy"
                  style={{width: "150px"}}
                />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://sybgen.com/" target="_blank" rel="noreferrer">
              <Tooltip title="SYBGEN" arrow placement="top">
                <img src={logo3} alt="SYBGEN" style={{width: "150px"}} />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://www.taskade.com/" target="_blank" rel="noreferrer">
              <Tooltip title="Taskade" arrow placement="top">
                <img src={logo2} alt="Taskade" style={{width: "150px"}} />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.jetbrains.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="JetBrains" arrow placement="top">
                <img src={logo4} alt="JetBrains" style={{width: "150px"}} />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://clickup.com/" target="_blank" rel="noreferrer">
              <Tooltip title="ClickUp" arrow placement="top">
                <img src={logo6} alt="ClickUp" style={{width: "150px"}} />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.interviewcake.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Interview Cake" arrow placement="top">
                <img
                  src={logo8}
                  alt="Interview Cake"
                  style={{width: "150px"}}
                />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://balsamiq.com/" target="_blank" rel="noreferrer">
              <Tooltip title="balsamiq" arrow placement="top">
                <img src={logo9} alt="balsamiq" style={{width: "150px"}} />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://1password.com/" target="_blank" rel="noreferrer">
              <Tooltip title="1Password" arrow placement="top">
                <img src={logo10} alt="1Password" style={{width: "150px"}} />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://givemycertificate.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Give My Certificate" arrow placement="top">
                <img
                  src={GMC}
                  alt="Give My Certificate"
                  style={{width: "150px"}}
                />
              </Tooltip>
            </a>
          </Grid>
        </Grid>

        <h5 style={{textAlign: "center"}} data-aos="fade-up">
          Gifting Partners
        </h5>
        <Grid
          container
          spacing={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="http://www.instagram.com/cutisticgifts"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Cutistic Gifts" arrow placement="top">
                <img
                  src={cutistic}
                  alt="Cutistic Gifts"
                  style={{width: "150px"}}
                />
              </Tooltip>
            </a>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            data-aos="fade-up" /*data-aos-delay="400"*/
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.instagram.com/baawarchiibakehouse/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Baawarchii Bakehouse" arrow placement="top">
                <img
                  src={bakehouse}
                  alt="Baawarchii Bakehouse"
                  style={{width: "150px"}}
                />
              </Tooltip>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Sponsors;
