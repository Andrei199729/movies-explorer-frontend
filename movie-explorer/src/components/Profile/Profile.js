import React from "react";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <>
            <div className="profile">
                <div className="profile__container">
                    <h2 className="profile__title">Привет, Андрей!</h2>
                    <form className="profile__form" action="/" name="formprofile">
                        <label className="profile__label" htmlFor="nameprofile">Имя
                            <input
                                type="text"
                                className="profile__input"
                                id="nameprofile"
                                minLength="2"
                                maxLength="40"
                                required
                            />
                        </label>
                        <label className="profile__label" htmlFor="emailprofile">E-mail
                            <input
                                type="text"
                                className="profile__input"
                                id="emailprofile"
                                minLength="2"
                                maxLength="40"
                                required
                            />
                        </label>
                        <button className="profile__btn">Редактировать</button>
                    </form>
                    <Link className="profile__link" to="/">Выйти из аккаунта</Link>
                </div>
            </div>
        </>
    );
}

export default Profile;