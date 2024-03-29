import { Grid } from "@mui/material";
import React from "react";
import "./Loc.css";
import { SiHiveBlockchain } from "react-icons/si";
import { IoHardwareChipOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiRibbon } from "react-icons/gi";

function Domain() {
  return (
    <div id='Domain' className='mobileview'>
      <div
        className='domain'
        style={{
          color: "#FFFFFF",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "5%",
            marginBottom: "4%",
            // color: "#3770FF",
            fontFamily: "Righteous",
          }}
          className='domainHeading'
          data-aos='fade-right'>
          Domain
        </h1>
        <Grid
          container
          sx={{ width: "100%" }}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: "5%",
            rowGap: "70px",
          }}
          className='domainGrid '>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            className='domainImgs'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}>
            <div className='flip-card' data-aos='flip-left'>
              <div className='flip-card-inner'>
                <div
                  className='flip-card-front'
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    <CgWebsite
                      style={{
                        color: "white",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <h3
                      style={{
                        color: "white",
                        margin: "0px",
                        padding: "0px",
                        marginTop: "15px",
                      }}>
                      Web/App
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            className='domainImgs'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}>
            <div className='flip-card' data-aos='flip-left'>
              <div className='flip-card-inner'>
                <div
                  className='flip-card-front'
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    <img
                      color='white'
                      alt='ai/ml'
                      src='https://img.icons8.com/material-rounded/60/ffffff/artificial-intelligence.png'
                    />
                    <h3
                      style={{
                        color: "white",
                        margin: "0px",
                        padding: "0px",
                        marginTop: "15px",
                      }}>
                      AI/ML
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            className='domainImgs'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}>
            <div className='flip-card' data-aos='flip-left'>
              <div className='flip-card-inner'>
                <div
                  className='flip-card-front'
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    <IoHardwareChipOutline
                      style={{
                        color: "white",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <h3
                      style={{
                        color: "white",
                        margin: "0px",
                        padding: "0px",
                        marginTop: "15px",
                      }}>
                      IoT
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            className='domainImgs'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}>
            <div className='flip-card' data-aos='flip-left'>
              <div className='flip-card-inner'>
                <div
                  className='flip-card-front'
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    <SiHiveBlockchain
                      style={{
                        color: "white",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <h3
                      style={{
                        color: "white",
                        margin: "0px",
                        padding: "0px",
                        marginTop: "15px",
                      }}>
                      Blockchain
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          {/* <Grid
            item
            xs={12}
            sm={6}
            md={2}
            className='domainImgs'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}>
            <div className='flip-card' data-aos='flip-left'>
              <div className='flip-card-inner'>
                <div
                  className='flip-card-front'
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    <GiRibbon
                      style={{
                        color: "white",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <h3
                      style={{
                        color: "white",
                        margin: "0px",
                        padding: "0px",
                        marginTop: "15px",
                      }}>
                      Social Cause
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid> */}
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            className='domainImgs'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}>
            <div className='flip-card' data-aos='flip-left'>
              <div className='flip-card-inner'>
                <div
                  className='flip-card-front'
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>
                    <HiOutlineLightBulb
                      style={{
                        color: "white",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <h3
                      style={{
                        color: "white",
                        margin: "0px",
                        padding: "0px",
                        marginTop: "15px",
                      }}>
                      Open Innovation
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Domain;
