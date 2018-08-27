import React from 'react';
import './index.css';
import './img/logo.png';
import Menu from '../Menu';

export default function Header() {
    return (
        <div className="header pure-menu-horizontal pure-menu-fixed">
            {/* <img src="img/logo.png" alt="logo" className="logo" /> */}
            <Menu />
            <h4 className="label">Rede Social</h4>
        </div>
    );
}