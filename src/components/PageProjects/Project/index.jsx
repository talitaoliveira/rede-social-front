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
        Api.getProject(project => {
            this.setState({
                project: project
            });
        }, projectId);
    }

    render() {

        let project = this.state.project;

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
                        <div className="projectInfo__group buttonGroup">
                            <Button enabled={project.volunteers} text="Quero ser voluntário!" />
                            <Button enabled={project.donation} text="Quero doar!" />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Project;