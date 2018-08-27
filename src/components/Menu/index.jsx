import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import MenuPage from './MenuPage';

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

    verifyRoute(){

        if( window.location.pathname === '/' ){
            console.log('HOME')
        }else{
            console.log('NAO HOME')
        }
    }

    render() {
        
        this.verifyRoute();

        let toggle = this.state.toggle;

        return (
            <div className="container">
                <div className="menu" onClick={() => this.toggleMenu()}>
                    <i className="menu__icon fas fa-bars"></i>
                </div>
                <MenuPage toggleMenu={toggle} />
            </div>

        )
    }
}

export default Menu;