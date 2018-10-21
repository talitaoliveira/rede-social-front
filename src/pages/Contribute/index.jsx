import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton'

import './index.css';

class Contribute extends React.Component {

    render() {
        return (
            <section className="pageSection contributePage">
                <BackButton/>

                <h2 className="pageSection__title contributePage__title">Contribua com este projeto!</h2>

                <article className="pageSection__description">
                    <p>Você desenvolvedor que deseja manter este projeto vivo, e tem algumas sugestões para melhorias, sinta-se a vontade para contribuir com ele.</p>
                    <br></br>
                    <p>Para contribuir na parte do desenvolvimento deste projeto, basta clonar ou criar um fork dele no github</p>
                    <br></br>
                    <p> Link para o reposiório: <a href="https://github.com/talitaoliveira">https://github.com/talitaoliveira</a></p>

                </article>

            </section>

        )

    }
}

export default Contribute;