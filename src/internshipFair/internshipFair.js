import React from "react";
import HeroFair from "./HeroFair";
import NavbarFair from "./NavbarFair";
import AboutFair from "./AboutFair";
import "./InternshipFair.css";
import Contact from "./Contact";
import Timeline from "./Timeline";

const InternshipFair = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <NavbarFair />
      <HeroFair />
      <AboutFair/>
      <Timeline/>
      <Contact/>
    </div>
  );
};

export default InternshipFair;
