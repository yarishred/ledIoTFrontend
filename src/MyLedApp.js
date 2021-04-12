import React, { useState } from "react";
import axios from "axios";

import "./MyLedApp.css";

export const MyLedApp = () => {
  const [state, setstate] = useState("");

  const handleSwitchOnOff = () => {
    const handleLed = () => {
      axios.get("http://localhost:3000").then((res) => {
        setstate(res.data.status);
      });
    };
    handleLed();
  };

  return (
    <div className="led-container">
      <h1>IoT Switch Led</h1>
      <button className={`btn ${state && "btnOn"}`} onClick={handleSwitchOnOff}>
        {state === true ? "ON" : "OFF"}
      </button>
    </div>
  );

};