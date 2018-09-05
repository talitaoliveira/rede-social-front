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

    filterBy(uf){
        let projectFiltered = this.state.projects;
        if( uf != '' ){
            projectFiltered = projectFiltered.filter((el) =>{
                return el.uf === uf
            });
        }
        
        this.setState({
            projects: projectFiltered
        });
    }

    render() {
        let projects = this.state.projects;

        return (
            <div className="center">
                <Link to='/'>Voltar</Link>
                <button className="pure-button" onClick={ ()=>{this.filterBy('SP')} }>Filtrar por São Paulo</button>
                <button className="pure-button" onClick={ ()=>{this.filterBy('PE')} }>Filtrar por Pernambuco</button>
                <button className="pure-button" onClick={ ()=>{this.filterBy('RJ')} }>Filtrar por Rio de janeirp</button>
                <button className="pure-button" onClick={ ()=>{this.filterBy('')} }>Trazer Todos</button>
                {projects.map((project) => {
                    return (
                        <div className="cardProject" key={project._id}>
                            <Link to={`/projects/${project._id}`}>
                                <img src="https://dummyimage.com/600x400/000/fff" alt="" className="cardProject__image" />
                                <div className="cardProject__info">
                                <h2 className="cardProject__title">
                                    {project.name}
                                </h2>
                                <span className="cardProject__state">
                                    {project.uf}
                                </span>
                                </div>
                            </Link>
                        </div>

                    );
                })}
            </div>
        )

    }
}

export default Projects;