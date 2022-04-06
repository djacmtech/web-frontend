import React from "react";
import HeroFair from "./HeroFair";
import NavbarFair from "./NavbarFair";
import AboutFair from "./AboutFair";
import Contact from "./Contact";
import Timeline from "./Timeline";
import FeaturesFair from "./FeaturesFair";
import FairFooter from "./FairFooter";
import Testimonials from "./Testimonials";
import "./InternshipFair.css";

import PastCompanies from "./PastCompanies";
const InternshipFair = () => {
  return (
    <div style={{ backgroundColor: "white", transform: 'translateY(-5px)' }}>
      <NavbarFair />
      <HeroFair />
      <AboutFair/>
      <PastCompanies/>
      <FeaturesFair/>
      <Timeline/>
      <Testimonials/>
      <Contact/>
      <FairFooter />
    </div>
  );
};

export default InternshipFair;
