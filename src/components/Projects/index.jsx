import React from 'react';
import Api from '../../service/api';

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

                        <h1 key={project._id}>{project.name}</h1>
                    );
                })}
            </div>
        )

    }
}

export default Projects;