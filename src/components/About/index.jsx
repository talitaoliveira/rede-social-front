import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {

    render() {
        return (
            <div className="center">
                <Link to='/'>Voltar</Link>
                <h1>Sobre este Projeto</h1>
                <p>
                    Projeto desenvolvido por <strong>Talita Silva de Oliveira</strong>, com o objetivo de realizar a conclusão da pós graduacão de <strong>Design de Webapps com tecnologia front end</strong>.
                </p>
                
            </div>
        )

    }
}

export default About;