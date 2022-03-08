import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./EventPage.css";
import axios from "axios";
const MainEvent = () => {
  const [data, setData] = useState([]);
  const [images, setImage] = useState([]);
  // to scroll to top of page
  const { mainEvent } = useParams();
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
    axios
      .get("https://djacmdev.pythonanywhere.com/api/events/")
      .then((res) => {
        console.log(res.data);
        res.data.map((x) => {
          if (x.title.toLowerCase() === { mainEvent }.mainEvent) {
            setData(x);
          }
          return 0
        });
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get("https://djacmdev.pythonanywhere.com/api/photos/")
      .then((res) => {
        console.log(res.data);
        res.data.map((x) => {
          if (x.event === data.id) {
            console.log(x.pic);
            // setImage(x.pic);
            setImage((prev) => {
              return [...prev, x.pic];
            });
          }
          return 0
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [routePath, mainEvent, data.id]);

  // const [data, setData] = useState([]);
  // const [images, setImage] = useState([]);
  // const { mainEvent } = useParams();
  // console.log(e);
  // e.data.map((x) => {
  //   if (x.title.toLowerCase() === { mainEvent }.mainEvent) {
  //     setData(x);
  //   }
  //   return 0;
  // })

  // e.pics.map((x) => {
  //   if (x.event === data.id) {
  //     console.log(x.pic);
  //     // setImage(x.pic);
  //     setImage((prev) => {
  //       return [...prev, x.pic];
  //     });

  //   }
  //   return 0;

  // })
  return (
    <div>
      <Header />
      <center>
        <div className="mainEvent">
          <h1>{data.title}</h1>
          <h2>What is this event about?</h2>
          <p>{data.about}</p>
          <div style={{ borderTop: "2px grey solid", width: "45%" }}></div>
        </div>
        <Grid container spacing={1} style={{ padding: "30px 10%" }}>
          <Grid item sm={6}>
            <img
              className="MainImg2"
              src={(images[1])}
              // src={
              //   "http://137.135.78.87:8080/media/images/images/events/ACM%20101/WhatsApp_Image_2021-02-12_at_2.46.52_PM_yqwkLUU.jpeg"
              // }

              alt="eventImg1"
            ></img>
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img
                  className="MainImg"
                  src={(images[4])}
    
                  alt="eventImg2"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  src={(images[2])}
    
                  alt="eventImg3"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  style={{ opacity: ".2" }}
                  src={(images[3])}
    
                  alt="eventImg4"
                ></img>
                <div
                  style={{
                    transform: "translateY(-180px)",
                    fontSize: "2rem",
                    color: "white",
                  }}
                >
                  View Gallery
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </center>
      <Grid className="questions" container spacing={3}>
        <Grid item sm={6} xs={12}>
          <h2>When is it happening?</h2>
        </Grid>
        <Grid item sm={6} xs={12}>
          <p>{data.when}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h2>What's in it for you?</h2>
        </Grid>
        <Grid item sm={6} xs={12}>
          <p>{data.you}</p>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ padding: "5px 10%" }}>
        <Grid item sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <img
                className="MainImg"
                src={(images[1])}
  
                alt="eventImg5"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={(images[2])}
  
                alt="eventImg6"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={(images[3])}
  
                alt="eventImg7"
              ></img>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <img
            className="MainImg2"
            src={(images[4])}
            alt="eventImg8"
          ></img>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' alignItems='center' spacing={1} style={{ padding: "0 10%" }}>
        {/* <Grid item xs={12}>
          {" "}
          <img
            className="MainImg"
            src={(images[2])}
            alt="eventImg"
          ></img>
        </Grid> */}
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={(images[4])}
            alt="eventImg9"
          ></img>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={(images[2])}
            alt="eventImg10"
          ></img>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={(images[3])}
            alt="eventImg11"
          ></img>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={(images[5])}
            alt="eventImg12"
          ></img>
        </Grid>
      </Grid>
      {/* <Grid container spacing={1} style={{ padding: "5px 10%" }}>
        <Grid item sm={6}>
          <img
            className="MainImg2"
            src={(images[2])}
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <img
                className="MainImg"
                src={(images[1])}
  
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={(images[3])}
  
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={(images[1])}
  
                alt="eventImg"
              ></img>
             </Grid> */}
          {/* </Grid>  */}
        {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default MainEvent;
