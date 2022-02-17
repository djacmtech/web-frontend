import { Grid } from "@mui/material";
import React from "react";
import "./Loc.css";
import { FaUserGraduate } from "react-icons/fa";

function Domain() {
  return (
    <center>
        <div
          className="domain"
          style={{
            color: "#FFFFFF", 
            backgroundColor: "#001521",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
            paddingInline: '20px 0px 50px 0px'
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
              // color: "#3770FF",
              fontFamily: "Righteous",
            }}
            className="domainHeading"
            data-aos="fade-right"
          >
            Domain
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
              rowGap: "70px",
            }}
            className='domainGrid'
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div className="flip-card" data-aos="zoom-in">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                        data-aos="fade-up"
                      >
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
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div className="flip-card" data-aos="zoom-in">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                        data-aos="fade-up"
                      >
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
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div className="flip-card" data-aos="zoom-in">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                        data-aos="fade-up"
                      >
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
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div className="flip-card" data-aos="zoom-in">
                <div className="flip-card-inner">
                  <div
                    className="flip-card-front"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FaUserGraduate
                        style={{
                          color: "white",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                      <h3
                        style={{
                          color: "white",
                          margin: "0px",
                          padding: "0px",
                          marginTop: "10px",
                        }}
                        data-aos="fade-up"
                      >
                        Blockchain
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
    </center>
  );
}

export default Domain;