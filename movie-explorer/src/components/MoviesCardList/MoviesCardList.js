import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();
  const pathSavedMovies = location.pathname === "/saved-movies";
  const pathMovies = location.pathname === "/movies";
  const notFilms = "Ничего не найдено";
  const windowSizeMax = window.innerWidth >= 1280 && 12;
  const windowSizeMiddle =
    window.innerWidth <= 1280 && window.innerWidth >= 769 && 12;
  const windowSizeMiddleAndMin =
    window.innerWidth <= 768 && window.innerWidth >= 481 && 8;
  const windowSizeMin = window.innerWidth <= 480 && 5;
  const condition =
    windowSizeMax ||
    windowSizeMiddle ||
    windowSizeMiddleAndMin ||
    windowSizeMin;
  const [countMovies, setCountMovies] = useState(condition);

  function loreMore() {
    if (window.innerWidth >= 1280) {
      setCountMovies(countMovies + 3);
    } else if (window.innerWidth <= 1280 && window.innerWidth >= 769) {
      setCountMovies(countMovies + 3);
    } else if (window.innerWidth <= 768 && window.innerWidth >= 481) {
      setCountMovies(countMovies + 2);
    } else {
      setCountMovies(countMovies + 2);
    }
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {props.onChecked
          ? props.shortMovies.map((shortMovie) => {
              return (
                <MoviesCard
                  key={shortMovie.id || shortMovie.movieId}
                  {...shortMovie}
                  pathSavedMovies={pathSavedMovies}
                  onSaveMovie={props.onSaveMovie}
                  saveMovies={props.saveMovies}
                  handleDeleteSaveMovie={props.handleDeleteSaveMovie}
                />
              );
            })
          : pathSavedMovies
          ? props.saveMovies.map((saveMovie) => {
              return (
                <MoviesCard
                  key={saveMovie.id || saveMovie.movieId}
                  {...saveMovie}
                  saveMovies={props.saveMovies}
                  pathSavedMovies={pathSavedMovies}
                  handleDeleteSaveMovie={props.handleDeleteSaveMovie}
                />
              );
            })
          : props.movies.slice(0, countMovies).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id || movie.movieId}
                  {...movie}
                  pathSavedMovies={pathSavedMovies}
                  onSaveMovie={props.onSaveMovie}
                  saveMovies={props.saveMovies}
                  handleDeleteSaveMovie={props.handleDeleteSaveMovie}
                />
              );
            })}
        {(pathMovies && props.movies.length === 0) ||
        (pathMovies && props.shortMovies.length === 0) ||
        (pathSavedMovies && props.saveMovies.length === 0) ||
        (pathSavedMovies && props.shortMovies.length === 0) ? (
          <p className="movies-not-found">{notFilms}</p>
        ) : null}
      </div>

      {(!pathSavedMovies && props.movies.length < countMovies) ||
      pathSavedMovies ||
      props.onChecked ? null : (
        <button className="movies-card-list__btn" onClick={loreMore}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
