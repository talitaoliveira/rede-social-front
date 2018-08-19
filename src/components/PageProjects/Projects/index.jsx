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
        Api.getProjects(projects => {
            this.setState({
                projects: projects
            });
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
                            <img src="https://dummyimage.com/600x400/000/fff" alt="" className="cardProject__image" />
                            <h2 className="cardProject__title">
                                <Link to={`/projects/${project._id}`}>{project.name}</Link>
                            </h2>
                            {/* <p className="cardProject__description">{project.description}</p> */}
                        </div>
                    );
                })}
            </div>
        )

    }
}

export default Projects;