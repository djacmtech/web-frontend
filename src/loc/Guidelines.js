import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./Loc.css";
function Guidelines() {

  const [rule, setRule] = useState([{ id: 0, desc: '' }])

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "csrftoken=PNWvCigcHKd01ul44FUpyLNwLbkVZTJNHv4NtPEwmhnedricHyK02uduZJy3Uump");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://djacmdev.pythonanywhere.com/api/guideline/", requestOptions)
      .then(response => response.json())
      .then(result => {
        setRule(result)
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div id="Guidelines" className='mobileview' style={{ color: "black", backgroundColor: "#001522", padding: '0 8%', marginBottom: '4%' }}>

      <center>
        <div data-aos="fade-right">
          <h2 className="guidelineHeading">Guidelines</h2>
        </div>
        <Grid container columnSpacing={1} rowSpacing={8}>
          {rule.map((x) => {
            return (
              <Grid key={x.id - 2} item lg={4} md={6} sm={6} xs={12} >
                <div key={x.id - 2} data-aos="fade-up" className="guidelines">
                  <span className="guideNumber">0{(x.id) - 2}</span>
                  <br />
                  <p className="guideContain">{x.desc}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </center>
    </div>
  );
}

export default Guidelines;
