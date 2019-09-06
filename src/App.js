import React, { useState, useEffect } from "react";
import MainContainer from "./components/MainContainer";
import Input from "./components/Input";
import "./app.css";

const App = () => {
  const [titleEffect, setTitleEffect] = useState("App-loading");

  useEffect(() => {
    setTimeout(() => setTitleEffect(""), 500);
  }, []);
  return (
    <div className="App-main">
      <div className={titleEffect}>
        <div className="App-title">Bouncy Balls</div>
      </div>
      <Input />
      <MainContainer />
    </div>
  );
};

export default App;
