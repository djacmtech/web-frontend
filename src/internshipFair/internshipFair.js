import React from "react";
import HeroFair from "./HeroFair";
import NavbarFair from "./NavbarFair";
import AboutFair from "./AboutFair";
import "./InternshipFair.css";
const InternshipFair = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <NavbarFair />
      <HeroFair />
      <AboutFair/>
    </div>
  );
};

export default InternshipFair;
