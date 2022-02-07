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
  const baseUrl = "https://djacmdev.pythonanywhere.com/media";
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
    axios
      .get("https://djacmdev.pythonanywhere.com/api/events/")
      .then((res) => {
        // console.log(res.data);
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
            setImage(x.pic);
            // setImage((prev) => {
            //   return [...prev, x.pic];
            // });
          }
          return 0
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [routePath, mainEvent, data.id]);

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
              src={baseUrl.concat(images[1])}
              // src={
              //   "http://137.135.78.87:8080/media/images/images/events/ACM%20101/WhatsApp_Image_2021-02-12_at_2.46.52_PM_yqwkLUU.jpeg"
              // }
              // src="https://picsum.photos/seed/picsum/200/"
              alt="eventImg"
            ></img>
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img
                  className="MainImg"
                  src={baseUrl.concat(images[4])}
                  // src="https://picsum.photos/seed/picsum/200/"
                  alt="eventImg"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  src={baseUrl.concat(images[2])}
                  // src="https://picsum.photos/seed/picsum/200/"
                  alt="eventImg"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  style={{ opacity: ".2" }}
                  src={baseUrl.concat(images[3])}
                  // src="https://picsum.photos/seed/picsum/200/"
                  alt="eventImg"
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
                src={baseUrl.concat(images[1])}
                // src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl.concat(images[2])}
                // src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl.concat(images[3])}
                // src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <img
            className="MainImg2"
            src={baseUrl.concat(images[4])}
            // src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' alignItems='center' spacing={1} style={{ padding: "0 10%" }}>
        {/* <Grid item xs={12}>
          {" "}
          <img
            className="MainImg"
            src={baseUrl.concat(images[2])}
            // src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid> */}
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={baseUrl.concat(images[4])}
            // src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={baseUrl.concat(images[2])}
            // src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={baseUrl.concat(images[3])}
            // src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img
            className="MainImg"
            src={baseUrl.concat(images[5])}
            // src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
      </Grid>
      {/* <Grid container spacing={1} style={{ padding: "5px 10%" }}>
        <Grid item sm={6}>
          <img
            className="MainImg2"
            src={baseUrl.concat(images[2])}
            // src="https://picsum.photos/seed/picsum/200/"
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <img
                className="MainImg"
                src={baseUrl.concat(images[1])}
                // src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl.concat(images[3])}
                // src="https://picsum.photos/seed/picsum/200/"
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl.concat(images[1])}
                // src="https://picsum.photos/seed/picsum/200/"
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
