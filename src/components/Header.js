import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/_header.scss'

const Header = ({theme, onThemeToggle}) => {
    const toggleTheme = () => {
        return onThemeToggle(!theme);
    }
    return (
        <div className="header">
            <h1><Link to='/'>Where in the world?</Link></h1>
            <div className="button_theme" onClick={toggleTheme}><i className={theme ? `far fa-moon` : `fas fa-moon`}></i>Dark mode</div>
        </div>
    )
}

export default Header
