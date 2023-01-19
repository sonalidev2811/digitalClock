import React, { useState, useEffect } from "react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="time">{time}</div>;
};

export default Clock;
