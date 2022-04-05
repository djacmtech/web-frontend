import React from "react";
import HeroFair from "./HeroFair";
import NavbarFair from "./NavbarFair";
import AboutFair from "./AboutFair";
import "./InternshipFair.css";
import FeaturesFair from "./FeaturesFair";
const InternshipFair = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <NavbarFair />
      <HeroFair />
      <AboutFair/>
      <FeaturesFair/>
    </div>
  );
};

export default InternshipFair;
