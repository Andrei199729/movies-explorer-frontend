import React from "react";
import Find from '../../images/find.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    return (
        <div className="search__container">
            <form className="search-form" name="formsearchmovie">
                <input
                    className="search-form__input"
                    type="text"
                    id="movie"
                    minLength="2"
                    maxLength="40"
                    placeholder="Фильм"
                    required
                />
                <button className="search-form__btn">
                    <img className="search-form__btn-find" src={Find} alt="Поиск" />
                </button>
            </form>
            <FilterCheckbox />
        </div >
    );
}

export default SearchForm;