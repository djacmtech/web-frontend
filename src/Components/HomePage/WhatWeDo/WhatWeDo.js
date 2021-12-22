import React, { useState } from "react";
import WhatWeDo_array from "./WhatWeDo_array";
import { Grid, Box } from "@mui/material";


const WhatWeDo = () => {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'coolvetica', fontWeight: 900, marginBottom: '70px' }}>What We Do</h2>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px', margin: '0px' }}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', width: '80%', alignItems: 'center' }} spacing={10}>
            {WhatWeDo_array.map((work) => {
              return (
                <>
                  <Grid item md={3} xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="work">
                      <div className="workImgContainer">
                        <img src={work.image} className="workImg" />
                      </div>
                      <h4>{work.title}</h4>
                      <p>{work.description}</p>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
