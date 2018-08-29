import React from 'react';
import { Link } from 'react-router-dom';


import './index.css';
import Api from '../../../service/api';

class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        // Api.getProjects(projects => {
        //     this.setState({
        //         projects: projects
        //     });
        // });
        this.setState({
            projects: [{
                _id: "5b2e627a8c40531116ed83a7",
                name: "Carrinho da Alegria",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                volunteers: true,
                location: "GAC",
                donations: true
            },
            {
                _id: "5b2e62988c40531116ed83a8",
                name: "Aniversariantes do Mês - NAAC",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                volunteers: true,
                location: "GAC",
                donations: true
            }]
        });
    }

    render() {
        let projects = this.state.projects;

        return (
            <div className="center">
                <Link to='/'>Voltar</Link>
                {projects.map((project) => {
                    return (
                        <div className="cardProject" key={project._id}>
                            <Link to={`/projects/${project._id}`}>
                                <img src="https://dummyimage.com/600x400/000/fff" alt="" className="cardProject__image" />
                                <h2 className="cardProject__title">
                                    {project.name}
                                </h2>
                            </Link>
                        </div>

                    );
                })}
            </div>
        )

    }
}

export default Projects;