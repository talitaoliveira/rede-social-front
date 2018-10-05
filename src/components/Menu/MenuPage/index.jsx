import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class MenuPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: ''
        };

    }

    componentWillReceiveProps(nextProps) {
        //console.log(`NextProps:`, nextProps)
        this.setState({
            toggleMenu: nextProps.toggleMenu
        });
    }

    toggleMenuByItem(e) {
        //this.props.toggleMenu = false;
        //console.log(this.props.toggleMenu)
    }

    render() {

        //let showMenu = (this.state.toggleMenu === true ? 'show' : '');
        // console.log('menu ta mostrando?')
        //console.log(`[RENDER] this.state.toggleMenu: ${this.props.toggleMenu}`)

        return (
            <div className={`menuList ${(this.state.toggleMenu === true ? 'show' : '')}`}>
                <ul>
                    <li className="menuList__item">
                        <Link to='/' onClick={(e) => this.toggleMenuByItem(e)}>Home</Link>
                    </li>
                    <li className="menuList__item">
                        <Link to='/projects' onClick={(e) => this.toggleMenuByItem(e)}>Projetos</Link>
                    </li>
                    <li className="menuList__item">
                        <Link to='/about' onClick={(e) => this.toggleMenuByItem(e)}>Sobre</Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default MenuPage;