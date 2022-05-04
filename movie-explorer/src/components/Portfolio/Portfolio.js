import React from "react";

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__subtitle">Портфолио</h3>
                <a className="portfolio__project" href="/">Статичный сайт</a>
                <a className="portfolio__project" href="/">Адаптивный сайт</a>
                <a className="portfolio__project" href="/"><span className="portfolio__project-span">Одностраничное приложение</span></a>
            </div>
        </div>
    );
}

export default Portfolio;