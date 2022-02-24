import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid'
import './Loc.css'

const CountDown = () => {

  const calculateTimeLeft = () => {
    let diff = +new Date("March 12, 2022 00:00:01").getTime() - +new Date().getTime()
    let timeLeft = {
      DAYS: Math.floor((diff / (1000 * 60 * 60 * 24))) / 10 < 1 ? '0' + Math.floor((diff / (1000 * 60 * 60 * 24))) : Math.floor((diff / (1000 * 60 * 60 * 24))),
      HOURS: Math.floor((diff / (1000 * 60 * 60)) % 24) / 10 < 1 ? '0' + Math.floor((diff / (1000 * 60 * 60)) % 24) : Math.floor((diff / (1000 * 60 * 60)) % 24),
      MINUTES: Math.floor((diff / 1000 / 60) % 60) / 10 < 1 ? '0' + Math.floor((diff / 1000 / 60) % 60) : Math.floor((diff / 1000 / 60) % 60),
      SECONDS: Math.floor((diff / 1000) % 60) / 10 < 1 ? '0' + Math.floor((diff / 1000) % 60) : Math.floor((diff / 1000) % 60)
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((calculateTimeLeft()))
    }, 1000)
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <Grid key={index} item md={3} sm={3} xs={3} style={{ padding: '20px 10px 20px 30px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} >
        <div style={{}}>
          <span style={{ fontWeight: 'bolder' }} className="countDownSize">
            {timeLeft[interval]}
          </span> <br />
          <span style={{ fontWeight: '600' }} className="countDownIntervalSize"> {interval} </span>
        </div>
        <div style={index - 3 ? { color: 'white' } : { display: 'none' }}>
          {index - 3 ? (<h3>:</h3>) : null}
        </div>
      </Grid>
    )
  })

  return (
    <div className='countdownSection' >
      <Grid container spacing={2} style={{ fontFamily: 'montserrat', border: '3px solid #FF8A50' }} className="countdownBorder">
        {timerComponents.length ? timerComponents : <span> Time's up! </span>}
      </Grid>
      <br />
    </div>
  );
};

export default CountDown;