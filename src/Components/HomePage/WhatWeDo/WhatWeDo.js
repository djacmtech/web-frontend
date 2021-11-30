import React, { useState } from "react";
import WhatWeDo_array from "./WhatWeDo_array"

const WhatWeDo = () => {

  return <>
    <div className="whatWeDo">
    <h2>What We Do</h2>
      <div className="whatWeDoContainer">
        {
          WhatWeDo_array.map(work => {
            return <>
              <div className="work">
                <div className="workImgContainer">
                  <img src={work.image} className="workImg" />
                </div>
                <h4>{work.title}</h4>
                <p>{work.description}</p>
              </div>
            </>
          })
        }
      </div>
    </div>
  </>;
};

export default WhatWeDo;
