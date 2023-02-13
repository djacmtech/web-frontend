import "./App.css";
import React, {lazy, Suspense} from "react";
// import FinalEvent from './Components/Eventpage/FinalEvent'
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router";
// import Committee from "./Components/Committee/Committee";
// import MainEvent from "./Components/Eventpage/MainEvent";
import ContactUS from "./Components/contactUS/ContactUS";
import Loc from "./loc/Loc";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {useEffect, useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Resource from "./Components/Resources/Resources";
import InternshipFair from "./internshipFair/internshipFair";
import SignUp from "./internshipFair/SignUp";
import OnBoarding from "./internshipFair/OnBoarding";
import ApplicationList from "./internshipFair/ApplicationList";
import Applicants from "./internshipFair/Applicants";
import PostAnInternship from "./internshipFair/PostAnInternship";
import Profilepage from "./internshipFair/Profilepage";
import Dashboard from "./internshipFair/Dashboard";
import InterNavbar from "./internshipFair/InterNavbar";
import StudentCart from "./internshipFair/StudentCart";
import AppliedJobs from "./internshipFair/AppliedJobs";
import JobPosition from "./internshipFair/JobPosition";
import PostNewInternship from "./internshipFair/PostNewInternship";
import CompanyNav from "./internshipFair/CompanyNav";
const FinalEvent = lazy(() => import("./Components/Eventpage/FinalEvent"));
// const HomePage = lazy(() => import('./Components/HomePage/HomePage'));
const Committee = lazy(() => import("./Components/Committee/Committee"));
const MainEvent = lazy(() => import("./Components/Eventpage/MainEvent"));

function App() {
  const [event, setEvent] = useState([]);
  const [moreEvent, setKEvent] = useState([]);
  const [comData, setCom] = useState([]);
  const [facData, setFac] = useState([]);
  const [pic, setPic] = useState([]);
  useEffect(() => {
    Aos.init({duration: 1000, once: true});
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // finals event
    fetch("https://djacmdev.pythonanywhere.com/api/events/", requestOptions)
      .then(response => response.json())
      .then(result => {
        setEvent(result);
      })
      .catch(error => console.log("error", error));

    // know more
    axios
      .get("https://djacmdev.pythonanywhere.com/api/events/")
      .then(res => {
        setKEvent(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    // know more pics
    axios
      .get("https://djacmdev.pythonanywhere.com/api/photos/")
      .then(res => {
        setPic(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    // committe
    axios
      .get("https://djacmdev.pythonanywhere.com/api/core_committee/")
      .then(res => {
        setCom(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    // faculty
    axios
      .get("https://djacmdev.pythonanywhere.com/api/faculty/")
      .then(res => {
        setFac(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <Loc />
  );
}

export default App;
