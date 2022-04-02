import React from "react";
import WhatWeDo_array from "./WhatWeDo_array";
import { Grid } from "@mui/material";

const WhatWeDo = () => {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'coolvetica', fontWeight: 900, marginBottom: '70px' }}>What We Do</h2>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0px', margin: '0px' }}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', width: '80%', alignItems: 'center' }} spacing={10}>
            {WhatWeDo_array.map((work, index) => {
              return (
                  <Grid item md={3} xs={12} sm={12} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div key={index} className="work">
                      <div key={index} className="workImgContainer">
                        <img src={work.image} className="workImg" alt={index}/>
                      </div>
                      <h4>{work.title}</h4>
                      <p>{work.description}</p>
                    </div>
                  </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
