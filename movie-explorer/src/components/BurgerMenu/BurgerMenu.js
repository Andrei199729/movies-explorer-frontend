import React from "react";

function BurgerMenu(props) {

    return (
        <>
            <div className="burger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span className="menu__btn-burger"></span>
                </label>
                <div className="menu__box popup_transition">
                    <div className="menu__box-container">
                        {props.home}
                        {props.movies}
                        {props.saveMovies}
                        {props.account}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BurgerMenu;