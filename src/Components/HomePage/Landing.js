import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./HomePage.css"

export default function Landing() {
  const [OurEvents2, setOurEvents2] = useState([]);

  useEffect(() => {
    axios
      .get("https://djacmdev.pythonanywhere.com/api/events/")
      .then((res) => {
        // console.log(res.data);
        setOurEvents2(res.data.slice(0, 4))
        console.log(OurEvents2);
      })
      .catch((e) => {
        console.log(e);
      });
      // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className="landingScreen">
        <div className="landImg">
          <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div class="wrapper">
              <p class="word"><span>Association for Computing Machinery</span></p>
            </div>
            <h3 style={{ margin: '0', padding: '0' }}>Dwarkadas Jivanlal Sanghvi College of Engineering</h3>
          </div>
        </div>
        <div className="events">
          {
            OurEvents2.map((event, index) => {
              return (
                <div key={index} className="eventCard">
                  <img src={event.image.slice(0,-15)} className="eventImg" alt="eventImg" />
                  <h4 className="eventName">{event.title}</h4>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}