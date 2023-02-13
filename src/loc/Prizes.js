import {Grid} from "@mui/material";
import React from "react";
import "./Loc.css";
function Prizes() {
  return (
    <>
      <div className="Prizes1 mobileview" id="Prizes">
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
                fontFamily: "Righteous",
                fontWeight: "400",
                fontSize: "50px",
              }}
              className="prizesHeading"
              data-aos="fade-right"
            >
              Prizes
            </h1>
            <Grid
              container
              sx={{width: "100%"}}
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
                  style={{width: "40%", height: "40%"}}
                  data-aos="zoom-in"
                  className="imgPrize"
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
                  <h2 style={{padding: "0px", margin: "0px", fontSize: "36px"}}>
                    {/* ₹10,000 */} 2nd Prize
                  </h2>
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
                  style={{width: "70%", height: "70%"}}
                  data-aos="zoom-in"
                  className="imgPrize"
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
                  <h2 style={{padding: "0px", margin: "0px", fontSize: "36px"}}>
                    {/* ₹25,000 */} 1st Prize
                  </h2>
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
                  style={{width: "40%", height: "40%"}}
                  data-aos="zoom-in"
                  className="imgPrize"
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
                  <h2 style={{padding: "0px", margin: "0px", fontSize: "36px"}}>
                    {/* ₹7,500 */} 3rd Prize
                  </h2>
                </div>
              </Grid>
            </Grid>
            {/* <p className="goodies">& exciting goodies worth upto ₹2 Lakh!</p> */}
            <p className="goodies">
              TO BE ANNOUNCED SOON!
            </p>
            <p className="auxiliaryPrizes">
              Get a chance to win prizes in subcategories like "Best UI/UX",
              "Best Pitch" and "Most Innovative Idea"
            </p>
          </div>
        </div>
      </div>
      <div className="Prizes2">
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
              paddingBottom: "10px",
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
                fontFamily: "Righteous",
                fontSize: "40px",
              }}
              className="prizesHeading"
              data-aos="fade-right"
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
                paddingBottom: "20px",
              }}
            >
              <img
                src="https://drive.google.com/uc?export=download&id=172ODE8_sj8s-CSd4SThuqTPADQogxY-n"
                alt="prize-1"
                style={{width: "40%", height: "40%"}}
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
                <h2 style={{padding: "0px", margin: "0px"}}>
                  {/* ₹25,000 */}
                  1st Prize
                  </h2>
              </div>
            </Grid>
            <Grid
              container
              sx={{width: "100%"}}
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
                  paddingBottom: "20px",
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=1vDCd7giuyAvFN-u5UtWgFQDtEyqbhgID"
                  alt="prize-2"
                  style={{width: "40%", height: "40%"}}
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
                  <h2 style={{padding: "0px", margin: "0px"}}>
                    {/* ₹12,500 */}
                    2nd Prize
                    </h2>
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
                  paddingBottom: "0px",
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=download&id=1q7C-acDAoaXCr0bIvADUbKXSZjqbsF7i"
                  alt="prize-3"
                  style={{width: "40%", height: "40%"}}
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
                  <h2 style={{padding: "0px", margin: "0px"}}>
                    {/* ₹7,500 */}
                    3rd Prize
                    </h2>
                </div>
              </Grid>
            </Grid>
            <p
              className="goodies"
              style={{fontSize: "15px", padding: "0px 30px"}}
            >
              {/* & exciting goodies worth upto ₹2 Lakh! */}
              TO BE ANNOUNCED SOON!
            </p>
            <p className="auxiliaryPrizes">
              Get a chance to win prizes in subcategories like "Best UI/UX",
              "Best Pitch" and "Most Innovative Idea"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prizes;
