import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
    const location = useLocation();
    const landing = location.pathname === '/';

    return (
        <header className={landing ? 'header' : 'header__movies'}>
            <Navigation />
        </header >
    );
}

export default Header;