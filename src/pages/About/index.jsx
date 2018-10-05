import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class About extends React.Component {

    render() {
        return (
            <div className="center">
                <Link to='/'>Voltar</Link>

                <section>
                    <h2>Sobre este Projeto</h2>
                    <p>
                        Projeto desenvolvido por <strong>Talita Silva de Oliveira</strong>, com o objetivo de realizar a conclusão da pós graduacão de <strong>Design de Webapps com tecnologia front end</strong>.
                </p>
                </section>

                <section>
                    <h2>Contato</h2>
                    <ul class="content_social">

                        <li class="social-links__github">
                            <a href="https://github.com/talitaoliveira" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li class="social-links__linkedin">
                            <a href="https://br.linkedin.com/in/litaaoliveira" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="social-links__codepen">
                            <a href="https://codepen.io/talitaoliveira" target="_blank">
                                <i class="fab fa-codepen"></i>
                            </a>
                        </li>
                        <li class="social-links__medium">
                            <a href="https://medium.com/@litaoliveira" target="_blank">
                                <i class="fab fa-medium"></i>
                            </a>
                        </li>
                        <li class="social-links__twitter">
                            <a href="https://twitter.com/liitacherry" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>

                    </ul>
                </section>
            </div>
        )

    }
}

export default About;