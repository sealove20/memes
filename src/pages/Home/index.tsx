import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMeme } from "../../store/actions";

import "./styles.css";

export const Home = () => {
  const { loading = "", meme = "" } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeme());
  }, [dispatch]);

  return (
    <div className="layout">
      <div aria-label="card" className="card">
        {loading ? (
          <h1>LOADING</h1>
        ) : (
          <Fragment>
            <h1 className="card__title">{meme.title}</h1>
            <img className="card__image" src={meme.url} alt="a meme image" />
            <button
              className="card__button"
              onClick={() => dispatch(getMeme())}
            >
              New Meme
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
};
