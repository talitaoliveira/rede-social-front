import React from 'react';
import { Link } from 'react-router-dom';

import Api from '../../../service/api';
import './index.css';
import Button from '../../Button';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            project: {}
        }
    }

    componentWillMount() {
        let projectId = this.props.match.params.number;
        // Api.getProject(project => {
        //     this.setState({
        //         project: project
        //     });
        // }, projectId);

        this.setState({
            project: {
                _id: "5b2e627a8c40531116ed83a7",
                name: "Carrinho da Alegria",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                volunteers: true,
                location: "GAC",
                donations: true
            }
        });
    }

    render() {

        let project = this.state.project;

        console.log(project)

        return (
            <div className="center">
                <Link to='/projects'>Voltar</Link>
                <div className="projectData">
                    <img src="https://dummyimage.com/600x400/000/fff" alt="" className="projectData__image" />
                    <h1 className="projectData__title">{project.name}</h1>
                    <div className="projectInfo">
                        <div className="projectInfo__group">
                            <strong className="projectInfo__group-label">Descrição:</strong>
                            <p className="projectInfo__group-value">{project.description}</p>
                        </div>
                        <div className="projectInfo__group">
                            <strong className="projectInfo__group-label">Localização:</strong>
                            <p className="projectInfo__group-value">{project.location}</p>
                        </div>
                        <div className="projectInfo__group center">
                            <Button enabled={project.volunteers} text="Quero ser voluntário!" />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Project;