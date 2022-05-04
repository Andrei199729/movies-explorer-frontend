import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";


import baskiy from "../../images/movie-image-baskiy.png";
import benxi from "../../images/movie-image-benxi.png";
import dance from "../../images/movie-image-dance.png";
import booksdealers from "../../images/movie-image-booksdealers.png";
import free from "../../images/movie-image-free.png";
import german from "../../images/movie-image-german.png";
import history from "../../images/movie-image-history.png";
import littlegirl from "../../images/movie-image-littlegirl.png";
import old from "../../images/movie-image-old.png";
import pijey from "../../images/movie-image-pijey.png";
import soundsfilm from "../../images/movie-image-soundsfilm.png";
import year from "../../images/movie-image-year.png";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        //тут в будущем будем обращаться к апи
        //а пока, через секунду выключим загрузку
        setTimeout(() => {
            setLoaded(false);
        }, 1000)
    }, [])
    const movies = [
        { image: baskiy, title: 'Баския: Взрыв реальности', time: '1ч 21м', _id: 1 },
        { image: benxi, title: 'В погоне за Бенкси', time: '1ч 42м', _id: 2 },
        { image: dance, title: 'Соберись перед прыжком', time: '1ч 10м', _id: 3 },
        { image: booksdealers, title: 'Книготорговцы', time: '1ч 37м', _id: 4 },
        { image: free, title: 'Бег это свобода', time: '1ч 44м', _id: 5 },
        { image: german, title: 'Когда я думаю о Германии ночью', time: '1ч 56м', _id: 6 },
        { image: history, title: 'Gimme Danger: История Игги и The Stooge...', time: '1ч 59м', _id: 7 },
        { image: littlegirl, title: 'Дженис: Маленькая девочка грустит', time: '1ч 42м', _id: 8 },
        { image: old, title: '33 слова о дизайне', time: '1ч 47м', _id: 9 },
        { image: pijey, title: 'Пи Джей Харви: A dog called money', time: '1ч 4м', _id: 10 },
        { image: soundsfilm, title: 'По волнам: Искусство звука в кино', time: '1ч 7м', _id: 11 },
        { image: year, title: 'Киноальманах «100 лет дизайна»', time: '1ч 3м', _id: 12 },
    ];
    return (
        <div className="movies">
            <SearchForm />
            {loaded ? <Preloader /> : <MoviesCardList movies={movies} />}
        </div>
    );
}

export default Movies;