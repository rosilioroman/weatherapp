import React from 'react';
import { Link } from 'react-router-dom';

function HeaderContainer() {
    return (
        <header className="header-wrapper">
            <div className="title-wrapper">
                <h1>Weather by Ro</h1>
                <Link to="/">Home</Link>
            </div>
            <h4 className="subtitle">Input your city and country to get the current weather</h4>
        </header>
    );
}

export default HeaderContainer;