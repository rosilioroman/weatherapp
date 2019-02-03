import React from 'react';

function HeaderContainer() {
    return (
        <header className="header-wrapper">
            <div className="title-wrapper">
                <h1>Weather by Ro</h1>
            </div>
            <h4 className="subtitle">Input your city and country to get the current weather</h4>
        </header>
    );
}

export default HeaderContainer;