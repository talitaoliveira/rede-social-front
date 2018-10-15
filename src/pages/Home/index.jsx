import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import MenuPage from '../../components/Menu/MenuPage';

class Home extends React.Component {

    render() {
        return (
            <section className="pageSection homePage">
                <nav className="homePage__nav">
                    <ul className="homePage__list">
                        <li className="list__item">
                            <Link to="/projects/">Projetos</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/about/">Sobre</Link>
                        </li>
                        <li className="list__item">
                            <Link to="/contribute/">Contribuir</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        )

    }
}

export default Home;