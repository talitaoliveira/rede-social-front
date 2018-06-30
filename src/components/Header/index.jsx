import React from 'react';
import './index.css';
import './img/logo.png';

export default function Header(){
    return(
        <div className="header pure-menu-horizontal pure-menu-fixed">
            <a href="/">
                <img src="img/logo.png" alt="logo" className="logo" />
            </a>
            <h4 className="label">Rede Social</h4>
        </div>
    );
}