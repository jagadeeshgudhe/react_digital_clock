import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import "./index.css"; 

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="time-display">{time}</div>
    </div>
  );
};

export default App;
