import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: false,
            isHome: true
        };
    }

    toggleMenu() {
        this.setState({
            toggle: !this.state.toggle
        });
    }


    render() {
        
        
        let {toggle} = this.state;

        return (
            <div className="container">
                <div className="menu" onClick={() => this.toggleMenu()}>
                    <i className={`menu__icon fas ${(toggle === true ? 'fa-times' : 'fa-bars')}`}></i>
                </div>
                <div className={`menuList ${(toggle === true ? 'show' : '')}`}>
                    <ul>
                        <li className="menuList__item">
                            <Link to='/' onClick={(e) => this.toggleMenu()}>Home</Link>
                        </li>
                        <li className="menuList__item">
                            <Link to='/projects/' onClick={(e) => this.toggleMenu()}>Projetos</Link>
                        </li>
                        <li className="menuList__item">
                            <Link to='/contribute/' onClick={(e) => this.toggleMenu()}>Contribuir</Link>
                        </li>
                        <li className="menuList__item">
                            <Link to='/about/' onClick={(e) => this.toggleMenu()}>Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Menu;