import React from "react";
import HeroFair from "./HeroFair";
import NavbarFair from "./NavbarFair";
import AboutFair from "./AboutFair";
import "./InternshipFair.css";
import FeaturesFair from "./FeaturesFair";
import FairFooter from "./FairFooter";
import PastCompanies from "./PastCompanies";
const InternshipFair = () => {
  return (
    <div style={{ backgroundColor: "white", transform: 'translateY(-5px)' }}>
      <NavbarFair />
      <HeroFair />
      <AboutFair/>
      <PastCompanies/>
      <FeaturesFair/>
      <FairFooter />
    </div>
  );
};

export default InternshipFair;
