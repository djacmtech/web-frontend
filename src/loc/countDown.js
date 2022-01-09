import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid'

const CountDown = () => {

  const calculateTimeLeft = () => {
    let diff = +new Date("February 27, 2022 00:00:01").getTime() - +new Date().getTime()
    let timeLeft = {
      DAYS: Math.floor((diff/(1000*60*60*24))),
      HOURS: Math.floor((diff/(1000*60*60))%24),
      MINUTES: Math.floor((diff/1000/60)%60),
      SECONDS: Math.floor((diff/1000)%60)
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setTimeLeft((calculateTimeLeft()))
    }, 1000)
    return ()=> clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, index)=>{
    if(!timeLeft[interval]) {
      return
    }
    timerComponents.push(
      <Grid item md={3} sm={6} xs={12} style={{padding:'20px 10px 20px 10px'}}>
        <span style={{fontSize:'3.3rem', fontWeight:'bolder'}}>{timeLeft[interval]}</span> <br/>
        <span style={{fontSize:'0.8rem', fontWeight:'600'}}> {interval} </span> 
      </Grid>
    )
  })

  return (
    <div style={{padding:'50px'}}>
        <Grid container spacing={2} style={{width:'45%', fontFamily:'montserrat', border:'3px solid #FF8A50'}}>
          {timerComponents.length? timerComponents : <span> Time's up! </span>}
        </Grid>
        <br/>
    </div>
  );
};

export default CountDown;
