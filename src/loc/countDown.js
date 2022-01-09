import React from "react";
import { useTimer } from "react-timer-hook";
const CountDown = () => {
  const time = new Date();
  let expiryTimestamp = time.setHours(1152);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Times up for registration !!"),
  });
  return (
    <div>
      <div style={{ fontSize: "40px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
        <br />
      </div>
      <div style={{fontSize:'20px',margin:'40px'}}>
      <span>Days</span><span>Hours</span><span>Minutes</span><span>Seconds</span>
      </div>
    </div>
  );
};

export default CountDown;
