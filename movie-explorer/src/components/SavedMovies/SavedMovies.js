import React, { useState, useEffect } from "react";

import benxi from "../../images/movie-image-benxi.png";
import dance from "../../images/movie-image-dance.png";
import free from "../../images/movie-image-free.png";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        //тут в будущем будем обращаться к апи
        //а пока, через секунду выключим загрузку
        setTimeout(() => {
            setLoaded(false);
        }, 1000)
    }, [])
    const movies = [
        { image: benxi, title: 'В погоне за Бенкси', time: '1ч 42м', _id: 2 },
        { image: dance, title: 'Соберись перед прыжком', time: '1ч 10м', _id: 3 },
        { image: free, title: 'Бег это свобода', time: '1ч 44м', _id: 5 },
    ];
    return (
        <div className="movies">
            <SearchForm />
            {loaded ? <Preloader /> : <MoviesCardList movies={movies} />}
        </div>
    );
}

export default SavedMovies;