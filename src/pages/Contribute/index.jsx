import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Contribute extends React.Component {

    render() {
        return (
            <div className="center">
                <Link to='/'>Voltar</Link>
                <h1>Contribuir</h1>
                <p>
                    Para contribuir na parte do desenvolvimento deste projeto, basta clonar ou criar um fork dele no github

                </p>
                
            </div>
        )

    }
}

export default Contribute;