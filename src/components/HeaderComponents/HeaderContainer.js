import React from 'react';

function HeaderContainer() {
    return (
        <header className="header-wrapper">
            <div className="title-wrapper">
                <h1>Weather</h1>
                <h3>by Ro</h3>
            </div>
            <h4 className="subtitle">Input your city and country to get the current weather</h4>
        </header>
    );
}

export default HeaderContainer;