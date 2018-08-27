import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: this.props.toggleMenu
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            toggleMenu: nextProps.toggleMenu
        });
    }

    // TODO: ISSO NÃO TA FUNCIONANDO
    toggleMenu() {

        this.setState({
            toggleMenu: !this.state.toggleMenu
        });
    }

    render() {

        let showMenu = (this.state.toggleMenu === true ? 'show' : '');

        return (
            <div className={`menuList ${showMenu}`}>
                <ul>
                    <li className="menuList__item">
                        <Link to='/' onClick={() => this.toggleMenu()}>Home</Link>
                    </li>
                    <li className="menuList__item">
                        <Link to='/projects' onClick={() => this.toggleMenu()}>Projetos</Link>
                    </li>
                    <li className="menuList__item">
                        <Link to='/about' onClick={() => this.toggleMenu()}>Sobre</Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default Menu;