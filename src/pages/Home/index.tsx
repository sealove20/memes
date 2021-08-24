import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPickles, setHotDog } from "../../store/actions";

import "./styles.css";

export const Home = () => {
  const appState = useSelector((state: any) => state);
  const dispatch = useDispatch();

  function toPickle() {
    dispatch(setPickles("Pickles"));
  }

  function toHotDog() {
    dispatch(setHotDog("Hot Dog"));
  }

  return (
    <div className="layout">
      <div aria-label="card" className="card">
        <div className="card__content">
          <h1>Hello</h1>
          <p>{appState.payload}</p>
          <button onClick={toPickle}>Pickle</button>
          <button onClick={toHotDog}>Hot dog</button>
        </div>
      </div>
    </div>
  );
};
