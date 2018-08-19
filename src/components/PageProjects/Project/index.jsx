import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {

    render() {
        return (
            <div className="center">
                <Link to='/projects'>Voltar</Link>
                <h1>Ola mundo</h1>
            </div>
        )

    }
}

export default Project;