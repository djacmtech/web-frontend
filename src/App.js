import "./App.css";
import React, { lazy, Suspense } from "react";
// import FinalEvent from './Components/Eventpage/FinalEvent'
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
// import Committee from "./Components/Committee/Committee";
// import MainEvent from "./Components/Eventpage/MainEvent";
import ContactUS from "./Components/contactUS/ContactUS";
import Loc from "./loc/Loc";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Resource from "./Components/Resources/Resources";
const FinalEvent = lazy(() => import('./Components/Eventpage/FinalEvent'));
// const HomePage = lazy(() => import('./Components/HomePage/HomePage'));
const Committee = lazy(() => import('./Components/Committee/Committee'));
const MainEvent = lazy(() => import('./Components/Eventpage/MainEvent'));

function App() {

  const [event, setEvent] = useState([]);
  const [moreEvent, setKEvent] = useState([]);
  const [comData, setCom] = useState([]);
  const [facData, setFac] = useState([]);
  const [pic, setPic] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // finals event
    fetch("https://djacmdev.pythonanywhere.com/api/events/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setEvent(result);
      })
      .catch((error) => console.log("error", error));


    // know more
    axios
      .get("https://djacmdev.pythonanywhere.com/api/events/")
      .then((res) => {
        console.log(res.data);
        setKEvent(res.data);
      }).catch((e) => {
        console.log(e);
      });

    // know more pics
    axios
      .get("https://djacmdev.pythonanywhere.com/api/photos/")
      .then((res) => {
        console.log(res.data)
        setPic(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
    // committe
    axios.get(
      "https://djacmdev.pythonanywhere.com/api/core_committee/"
    ).then((res) => {
      console.log(res.data);
      setCom(res.data);
    }).catch((e) => {
      console.log(e);
    });

    // faculty
    axios.get(
      "https://djacmdev.pythonanywhere.com/api/faculty/"
    ).then((res) => {
      console.log(res.data);
      setFac(res.data);
    }).catch((e) => {
      console.log(e);
    });

  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Suspense fallback={<div style={{ fontSize: "6rem", paddingTop: '10%' }}><center><CircularProgress style={{ fontSize: '4rem' }} /></center></div>}>
                  <HomePage />
                  <Footer />
                </Suspense>
              </>
            }
          ></Route>
          <Route
            path="/events"
            element={
              <>
                <Suspense fallback={<div style={{ fontSize: "6rem", paddingTop: '10%' }}><center><CircularProgress style={{ fontSize: '4rem' }} /></center></div>}>
                  <FinalEvent data={event} />
                  <Footer />
                </Suspense>
              </>
            }
          ></Route>
          <Route
            path="/contact-us"
            element={
              <>
                <ContactUS />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/committee"
            element={
              <>
                <Suspense fallback={<div style={{ fontSize: "6rem", paddingTop: '10%' }}><center><CircularProgress style={{ fontSize: '4rem' }} /></center></div>}>
                  <Committee comData={comData} facData={facData} />
                  <Footer />
                </Suspense>
              </>
            }
          ></Route>
          <Route
            path={`/events/:mainEvent`}
            element={
              <>
                <Suspense fallback={<div style={{ fontSize: "6rem", paddingTop: '10%' }}><center><CircularProgress style={{ fontSize: '4rem' }} /></center></div>}>
                  <MainEvent data={moreEvent} pics={pic} />
                  <Footer />
                </Suspense>
              </>
            }
          />
          <Route path="/LOC" element={<Loc />}></Route>
          <Route path="/Resources" element={<Resource/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
