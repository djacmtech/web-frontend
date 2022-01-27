import Landing from "./Landing";
import Vision from "./Vision";
import About from "./About";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Mission from "./Mission/Mission";
import Header from "../Header/Header";
import Events from "./Events";
import React, { useEffect } from "react";
const HomePage = () => {
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  return (
    <>
      <Header activePage="Home" />
      <Landing />
      <About />
      <Vision />
      <Events />
      <Mission />
      <WhatWeDo />
    </>
  );
};

export default HomePage;
