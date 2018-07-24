import React from 'react';
import './index.css';
import Api from '../../service/api';

import Project from '../Project';

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

        //console.log(this.state)
        let projects = this.state.projects;
        console.log(projects)

        // 

        // console.log(this.state);
        return (
            <div className="center">
                {projects.map((project) => {
                    return (
                        <div className="cardProject" key={project._id}>
                            <img src="https://dummyimage.com/600x400/000/fff" alt="" class="cardProject__image"/>
                            <h2 className="cardProject__title">{project.name}</h2>
                            {/* <p className="cardProject__description">{project.description}</p> */}
                        </div>
                    );
                })}
            </div>
        )

    }
}

export default Projects;