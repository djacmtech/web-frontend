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

    fetch("http://djacmdev.pythonanywhere.com/api/guideline/", requestOptions)
      .then(response => response.json())
      .then(result => {
        setRule(result)
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div id="Guidelines" style={{ color: "black", backgroundColor: "white", padding: '0 8%', marginBottom: '4%' }}>

      <center>
        <h2 className="guidelineHeading">Guidelines</h2>
        <Grid container spacing={2}>
          {rule.map((x) => {
            return (
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <div className="guidelines" style={{ height: '130px' }}>
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
