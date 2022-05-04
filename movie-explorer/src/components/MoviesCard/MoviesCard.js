import React from "react";

function MoviesCard(props) {

    return (
        <article className="movies-card">
            <img className="movies-card__image" src={props.image} alt={props.title} />
            <div className="movies-card__text">
                <div className="movies-card__row">
                    <h2 className="movies-card__title">{props.title}</h2>
                    <button className={`movies-card__${props.pathSavedMovies ? 'cross' : 'like'}`} type="button"></button>
                </div>
                <p className="movies-card__time">{props.time}</p>
            </div>
        </article>
    );
}

export default MoviesCard;