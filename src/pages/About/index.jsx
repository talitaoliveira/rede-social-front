import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton'

import './index.css';

class About extends React.Component {

    render() {
        return (
            <section className="pageSection aboutPage">
                <BackButton/>
                <h2 className="pageSection__title aboutPagePage__title">Sobre este Projeto</h2>

                <article className="pageSection__description">
                    <p>
                        Projeto desenvolvido por <strong>Talita Silva de Oliveira</strong>, com o objetivo de realizar a conclusão da pós graduacão de <strong>Design de Webapps com tecnologia front end</strong>.
                </p>
                </article>

                <article className="pageSection__description">
                    <h2 className="pageSection__title">Contato</h2>
                    <ul className="content__social">

                        <li className="social-links__github">
                            <a href="https://github.com/talitaoliveira" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="social-links__linkedin">
                            <a href="https://br.linkedin.com/in/litaaoliveira" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="social-links__codepen">
                            <a href="https://codepen.io/talitaoliveira" target="_blank">
                                <i className="fab fa-codepen"></i>
                            </a>
                        </li>
                        <li className="social-links__medium">
                            <a href="https://medium.com/@litaoliveira" target="_blank">
                                <i className="fab fa-medium"></i>
                            </a>
                        </li>
                        <li className="social-links__twitter">
                            <a href="https://twitter.com/liitacherry" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>

                    </ul>
                </article>
            </section>
        )

    }
}

export default About;