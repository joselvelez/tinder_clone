import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return(
        <div className='header'>
            <h2>header</h2>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
                className="header__logo"
                src="https://logodownload.org/wp-content/uploads/2020/09/tinder-logo-0.png"
                alt=""
            />
        </div>
    );
}

export default Header;