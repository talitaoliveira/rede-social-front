import React from 'react';
import { Link } from 'react-router-dom';

import Api from '../../../service/api';

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

        console.log(project)

        return (
            <div className="center">
                <Link to='/projects'>Voltar</Link>
                <div className="projectData">
                    <img src="https://dummyimage.com/600x400/000/fff" alt="" className="projectData__img" />
                    <h1 className="projectData__title">{project.name}</h1>
                    <div className="projectInfo">
                        <div className="projectInfo__description pure-g">
                            <p className="pure-u-1-3">Descricao:</p>
                            <p className="pure-u-2-3">{project.description}</p>
                        </div>
                        <div className="projectInfo__location pure-g">
                            <p className="pure-u-1-3">Localizacao:</p>
                            <p className="pure-u-2-3">{project.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Project;