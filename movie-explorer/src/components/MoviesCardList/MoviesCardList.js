import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
    const location = useLocation();
    const pathSavedMovies = location.pathname === '/saved-movies';
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                {props.movies.map((movie) =>
                    <MoviesCard
                        key={movie._id}
                        {...movie}
                        pathSavedMovies={pathSavedMovies}
                    />
                )}
            </div>
            {pathSavedMovies ? null : <button className="movies-card-list__btn">Ещё</button>}
        </section>
    );
}

export default MoviesCardList;