import React from "react";
import HeroFair from "./HeroFair";
import NavbarFair from "./NavbarFair";
import AboutFair from "./AboutFair";
import "./InternshipFair.css";
import Contact from "./Contact";
import Timeline from "./Timeline";
import FairFooter from "./FairFooter";

const InternshipFair = () => {
  return (
    <div style={{ backgroundColor: "white", transform: 'translateY(-5px)' }}>
      <NavbarFair />
      <HeroFair />
      <AboutFair/>
      <Timeline/>
      <Contact/>
      <FairFooter />
    </div>
  );
};

export default InternshipFair;
