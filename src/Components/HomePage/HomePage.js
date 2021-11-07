import React from "react";
import Landing from "./Landing";
import Vision from "./Vision";
import About from "./About";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Video from './Video';
import Mission from './Mission/Mission';

const HomePage = () => {
  return (
    <>
      <Landing />
      <Video />
      <Vision />
      <About />
      <Mission/>
      <WhatWeDo />
    </>
  );
};

export default HomePage;
