import React from "react";

import logoImg from '../../img/logo.svg'

import './header.css'
import {NavLink} from "react-router-dom";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo" height={40} width={40}/>
                        <span>My Stones</span>
                    </div>
                    <nav className="header__nav">
                        <h2><button type="button" className="header__page"><NavLink exact to="/HomePage">Home</NavLink></button></h2>
                        <h2><button type="button" className="header__page"><NavLink exact to="/Catalog">Catalog</NavLink></button></h2>
                        <h2><button type="button" className="header__page"><NavLink exact to="/Cart">Cart</NavLink></button></h2>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;