import React from 'react';
import './Header.css';

function HeaderContainer() {
    return (
        <header className="header-wrapper">
            <div className="title-wrapper">
                <h1>Weather <a className="ro-link" href="https://github.com/rosilioroman">by Ro</a></h1>
            </div>
            <h4 className="subtitle">Input your city and country to get the current weather</h4>
        </header>
    );
}

export default HeaderContainer;