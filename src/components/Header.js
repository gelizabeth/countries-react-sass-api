import React from 'react';
import '../sass/_header.scss'

const Header = ({theme, onThemeToggle}) => {
    const toggleTheme = () => {
        return onThemeToggle(!theme);
    }
    return (
        <div className="header">
            <h1>Where in the world?</h1>
            <div className="button button_theme" onClick={toggleTheme}><i className={theme ? `far fa-moon` : `fas fa-moon`}></i>Dark mode</div>
        </div>
    )
}

export default Header
