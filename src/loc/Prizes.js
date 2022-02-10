import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./Loc.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Prizes() {

    useEffect(() => {
      Aos.init({ duration: 1000, once:true });
    }, []);

  return (
    <>
      <div className="Prizes1" id='Prizes'>
        <div
          style={{
            background:
              "linear-gradient(74.09deg, #34BDF3 0%, #585BA8 100.01%)",
          }}
        >
          <div
            className="prizes"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "5%",
                marginBottom: "4%",
                fontFamily:"Righteous",
                fontWeight:"400",
              }}
              className="prizesHeading"
              data-aos="fade-left"
            >
              Prizes
            </h1>
            <Grid
              container
              sx={{ width: "100%" }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "100%",
                marginBottom: "5%",
              }}
            >
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=1vDCd7giuyAvFN-u5UtWgFQDtEyqbhgID"
                  alt="prize-2"
                  style={{ width: "40%", height: "40%" }}
                  data-aos="zoom-in"
                />
                <div
                  className="amount"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "4%",
                  }}
                >
                  <FaRupeeSign style={{ width: "4%", height: "4%" }} />
                  <h2 style={{ padding: "0px", margin: "0px" }}>15,000</h2>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=172ODE8_sj8s-CSd4SThuqTPADQogxY-n"
                  alt="prize-1"
                  style={{ width: "70%", height: "70%" }}
                  data-aos="zoom-in"
                />
                <div
                  className="amount"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "4%",
                  }}
                >
                  <FaRupeeSign style={{ width: "4%", height: "4%" }} />
                  <h2 style={{ padding: "0px", margin: "0px" }}>20,000</h2>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=1q7C-acDAoaXCr0bIvADUbKXSZjqbsF7i"
                  alt="prize-3"
                  style={{ width: "40%", height: "40%" }}
                  data-aos="zoom-in"
                />
                <div
                  className="amount"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "4%",
                  }}
                >
                  <FaRupeeSign style={{ width: "4%", height: "4%" }} />
                  <h2 style={{ padding: "0px", margin: "0px" }}>10,000</h2>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      {/* <div className="Prizes2">
        <div
          style={{
            background:
              "linear-gradient(74.09deg, #34BDF3 0%, #585BA8 100.01%)",
          }}
        >
          <div
            className="prizes"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              paddingBottom:"10px",
            }}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "5%",
                marginBottom: "4%",
                fontFamily:"Righteous",
                fontSize:"30px",
              }}
              className="prizesHeading"
              data-aos="fade-left"
            >
              Prizes
            </h2>
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
                paddingBottom:"10px",
              }}
            >
              <img
                src="https://drive.google.com/uc?export=download&id=172ODE8_sj8s-CSd4SThuqTPADQogxY-n"
                alt="prize-1"
                style={{ width: "40%", height: "40%" }}
                data-aos="zoom-in"
              />
              <div
                className="amount"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  margin: "4%",
                }}
              >
                <FaRupeeSign style={{ width: "4%", height: "4%" }} />
                <h2 style={{ padding: "0px", margin: "0px" }}>20,000</h2>
              </div>
            </Grid>
            <Grid
              container
              sx={{ width: "100%" }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "100%",
                marginBottom: "5%",
              }}
            >
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                  paddingBottom:"10px",
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=1vDCd7giuyAvFN-u5UtWgFQDtEyqbhgID"
                  alt="prize-2"
                  style={{ width: "40%", height: "40%" }}
                  data-aos="zoom-in"
                />
                <div
                  className="amount"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "4%",
                  }}
                >
                  <FaRupeeSign style={{ width: "4%", height: "4%" }} />
                  <h2 style={{ padding: "0px", margin: "0px" }}>15,000</h2>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                  paddingBottom:"10px",
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=1q7C-acDAoaXCr0bIvADUbKXSZjqbsF7i"
                  alt="prize-3"
                  style={{ width: "40%", height: "40%" }}
                  data-aos="zoom-in"
                />
                <div
                  className="amount"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: "4%",
                  }}
                >
                  <FaRupeeSign style={{ width: "4%", height: "4%" }} />
                  <h2 style={{ padding: "0px", margin: "0px" }}>10,000</h2>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Prizes;
