import React from "react";
import Landing from "./Landing";
import Vision from "./Vision";
import About from "./About";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Video from './Video';
import Mission from './Mission/Mission';
import Header from "../Header/Header";
const HomePage = () => {
  return (
    <> 
      <Header activePage="Home"/> 
      <Landing />
      <Video />
      <About />
      <Vision />
      <Mission/>
      <WhatWeDo />
    </>
  );
};

export default HomePage;
