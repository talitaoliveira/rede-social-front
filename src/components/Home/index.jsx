import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Home extends React.Component {

    render() {
        return (
            <div className="center container">
                <h1>Ola mundo - Home</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/teste'>Teste</Link></li>
                    </ul>
                </nav>
            </div>
        )

    }
}

export default Home;