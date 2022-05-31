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
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Suspense
                  fallback={
                    <div style={{fontSize: "6rem", paddingTop: "10%"}}>
                      <center>
                        <CircularProgress style={{fontSize: "4rem"}} />
                      </center>
                    </div>
                  }
                >
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
                <Suspense
                  fallback={
                    <div style={{fontSize: "6rem", paddingTop: "10%"}}>
                      <center>
                        <CircularProgress style={{fontSize: "4rem"}} />
                      </center>
                    </div>
                  }
                >
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
                <Suspense
                  fallback={
                    <div style={{fontSize: "6rem", paddingTop: "10%"}}>
                      <center>
                        <CircularProgress style={{fontSize: "4rem"}} />
                      </center>
                    </div>
                  }
                >
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
                <Suspense
                  fallback={
                    <div style={{fontSize: "6rem", paddingTop: "10%"}}>
                      <center>
                        <CircularProgress style={{fontSize: "4rem"}} />
                      </center>
                    </div>
                  }
                >
                  <MainEvent data={moreEvent} pics={pic} />
                  <Footer />
                </Suspense>
              </>
            }
          />
          <Route path="/LOC" element={<Loc />}></Route>
          <Route path="/Resources" element={<Resource />}></Route>

          {/* main page */}
          <Route path="/internship-fair" element={<InternshipFair />}></Route>
          {/* signup with login pop up */}
          <Route path="/signup" element={<SignUp />}></Route>
          {/* student dashboard */}
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          ></Route>
          {/* cart */}
          <Route
            path="/cart"
            element={
              <>
                <InterNavbar></InterNavbar>
                <StudentCart />
              </>
            }
          ></Route>

          <Route
            path="/jobposition/:id"
            element={
              <>
                <InterNavbar />
                <JobPosition />
              </>
            }
          ></Route>

          <Route
            path="/profilepage"
            element={
              <>
                <InterNavbar />
                <Profilepage />
              </>
            }
          ></Route>

          <Route path="/onboarding" element={<OnBoarding />}></Route>
          <Route
            path="/if-application-list"
            element={
              <>
                <CompanyNav />
                <ApplicationList />
              </>
            }
          ></Route>
          <Route
            path="/applicant"
            element={
              <>
                <CompanyNav />
                <Applicants />
              </>
            }
          ></Route>
          <Route
            path="/post-an-internship"
            element={
              <>
                <CompanyNav />
                <PostAnInternship />
              </>
            }
          ></Route>
          <Route path="/cart" element={<StudentCart />}></Route>
          <Route
            path="/profilepage"
            element={
              <>
                <InterNavbar />
                <Profilepage />
              </>
            }
          ></Route>
          <Route
            path="/Applied%20Jobs"
            element={
              <>
                <InterNavbar />
                <AppliedJobs />
              </>
            }
          ></Route>
          <Route
            path="/jobposition/:id"
            element={
              <>
                <InterNavbar />
                <JobPosition />
              </>
            }
          ></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/postnewinternship"
            element={
              <>
                <CompanyNav />
                <PostNewInternship />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
