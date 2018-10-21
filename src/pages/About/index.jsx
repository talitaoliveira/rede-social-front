import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton'

import './index.css';

class About extends React.Component {

    render() {
        return (
            <section className="pageSection aboutPage">
                <BackButton />
                <h2 className="pageSection__title">Sobre</h2>

                <article className="pageSection__description">
                    <h3 className="pageSection__subtitle">A aplicação</h3>
                    <p>
                        Nesta aplicação você pode encontrar algumas ações/projetos sociais. Onde muitas dependem de contribuições e voluntários para se manterem ativas e continuar contribuindo para a sociedade de alguma forma.
                        <br /><br />
                        Em cada projeto você escontrará uma descrição e formas de entrar em contato, seja por Instagram, Facebook, Website..
                    </p>
                </article>

                <article className="pageSection__description">
                    <h3 className="pageSection__subtitle">O projeto</h3>
                    <p>
                        Este projeto foi desenvolvido por <strong>Talita Silva de Oliveira</strong>, com o objetivo de realizar a conclusão da pós graduacão de <strong>Design de Webapps com tecnologia front end</strong>.
                    </p>
                </article>

                <article className="pageSection__description">
                    <h3 className="pageSection__subtitle">Contato</h3>

                    <ul className="content__social">
                        
                        <li className="social-links social-links__github">
                            <a href="https://github.com/talitaoliveira" target="_blank">
                            <i className="fab fa-github social-links__icon"></i>
                            <span className="social-links__url">
                            https://github.com/talitaoliveira
                            </span>
                            </a>
                        </li>
                        <li className="social-links social-links__linkedin">
                            <a href="https://br.linkedin.com/in/litaaoliveira" target="_blank">
                                <i className="fab fa-linkedin social-links__icon"></i>
                                <span className="social-links__url">
                                https://br.linkedin.com/in/litaaoliveira
                            </span>
                            </a>
                        </li>

                        <li className="social-links social-links__linkedin">
                            <a href="mailto:litaa.oliveira@gmail.com" target="_blank">
                                <i className="far fa-envelope social-links__icon"></i>
                                <span className="social-links__url">
                                Email
                            </span>
                            </a>
                        </li>
                        

                    </ul>
                </article>

                {/* <article className="pageSection__description">
                    <h3 className="pageSection__title">A aplicação</h3>
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
                </article> */}
            </section >
        )

    }
}

export default About;