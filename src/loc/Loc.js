import React, { useEffect } from "react";
import Domain from "./Domain";
import About from "./About";
import Hero from "./Hero";
import Prizes from "./Prizes";
import Timeline from "./Timeline";
import Guidelines from "./Guidelines";
import Sponsors from "./Sponsors";
import Faqs from "./Faqs";
import ContactUs from "./ContactUs";

function Loc() {
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  return (
    <>
      <div style={{ backgroundColor: 'white' }}>
        <Hero />
        <About />
        <Prizes />
        <Domain />
        <Timeline />
        <Guidelines />
        <Sponsors />
        <Faqs />
        <ContactUs />
      </div>
    </>
  );
}

export default Loc;
