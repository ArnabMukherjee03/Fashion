import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "May, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer d-flex ">
    <div className="">{days} <span style={{fontSize: "16px!important"}}> Days</span> </div>
    <div className="">{hours} <span style={{fontSize: "16px!important"}}> Hours</span> </div>
    <div className="">{minutes} <span style={{fontSize: "16px!important"}}> Minutes</span> </div>
    <div className="">{seconds} <span style={{fontSize: "16px!important"}}> Seconds</span> </div>
    </div>
  );
};

export default Timer;