import React, { useState } from "react";

import "./styles.css";

export const Home = () => {
  const [homeState, setHomeState] = useState("");

  function toPickle() {
    setHomeState("Pickles");
  }

  function toHotDog() {
    setHomeState("Hot Dog");
  }

  return (
    <div className="layout">
      <div aria-label="card" className="card">
        <div className="card__content">
          <h1>Hello</h1>
          <p>{homeState}</p>
          <button onClick={toPickle}>Pickle</button>
          <button onClick={toHotDog}>Hot dog</button>
        </div>
      </div>
    </div>
  );
};
