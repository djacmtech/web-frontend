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
  const [pics, setPics] = useState([]);
  const [eventId, setEventId] = useState([]);
  // to scroll to top of page
  const { mainEvent } = useParams();
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
    axios
      .get("http://137.135.78.87:8080/api/events/")
      .then((res) => {
        res.data.map((x) => {
          if (x.title === { mainEvent }.mainEvent) {
            setData(x);
            setEventId(x.id);
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });

    Picture()
  }, [routePath]);

  function Picture() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    
      fetch("http://137.135.78.87:8080/api/photos/", requestOptions)
        .then(response => response.json())
        .then(result=>{
          result.map((i)=>{
            if(i.event === eventId) {
              console.log(i.pic)
              setPics(i.pic)
            }
          })
        })
        .catch(error => console.log('error', error));
  }

  console.log(pics)

  const baseUrl = "https://picsum.photos/200/300"
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
            {/* <img
              className="MainImg2"
              src={}
              alt="eventImg"
            /> */}
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img
                  className="MainImg"
                  src={baseUrl}
                  alt="eventImg"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  src={baseUrl}
                  alt="eventImg"
                ></img>
              </Grid>
              <Grid item xs={6}>
                <img
                  className="MainImg"
                  style={{ opacity: ".2" }}
                  src={baseUrl}
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
                src={baseUrl}
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl}
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl}
                alt="eventImg"
              ></img>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <img
            className="MainImg2"
            src={baseUrl}
            alt="eventImg"
          ></img>
        </Grid>
        </Grid>
      <Grid container spacing={1} style={{ padding: "0 10%" }}>
        <Grid item xs={12}>
          {" "}
          <img
            className="MainImg"
            src={baseUrl}
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img
            className="MainImg"
            src={baseUrl}
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img
            className="MainImg"
            src={baseUrl}
            alt="eventImg"
          ></img>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ padding: "5px 10%" }}>
        <Grid item sm={6}>
          <img
            className="MainImg2"
            src={baseUrl}
            alt="eventImg"
          ></img>
        </Grid>
        <Grid item sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <img
                className="MainImg"
                src={baseUrl}
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl}
                alt="eventImg"
              ></img>
            </Grid>
            <Grid item xs={6}>
              <img
                className="MainImg"
                src={baseUrl}
                alt="eventImg"
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainEvent;