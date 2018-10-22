 import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import Api from '../../../service/api';

import Modal from '../../../components/Modal';
import Repository from '../../../infrastructure/Repository';
import BackButton from '../../../components/BackButton'

const repository = new Repository();
class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            projectsFiltered: [],
            hitSearch: false,
            searchBy: {
                state: null,
                name: null
            }
        }
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        this.getDataFromAPI().then((data) => {
            console.log('[SUCCESS]: getDataFromAPI');
            this.saveDataOnRepository(data).then(() => {
                console.log('[SUCCESS]: saveDataOnRepository');
            });
        }).catch(() => {
            console.log('[APPLICATION ERROR]: Fail to retrieve data from API');
            this.getDataFromRepository().then((data) => {
                console.log('[SUCCESS]: getDataFromRepository');
            }).catch(() => {
                console.warn('[WARNIGN]: Nothing on local repository. GetDataFromAPI');
            })
        });
    }

    getDataFromRepository() {
        return new Promise(async (resolve, reject) => {
            repository.retrieveAll(data => {
                console.log(data)
                this.setState({
                    projects: data
                });
                resolve();
            }, () => {
                console.log('[APPLICATION INFO]: No saved data on local repository.');
                reject();
            })
        });
    }

    getDataFromAPI() {
        return new Promise((resolve, reject) => {
            try {
                Api.getProjects(projects => {
                    this.setState({
                        projects: projects
                    });
                    resolve(projects);
                }).catch(err =>{
                    reject(err);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    saveDataOnRepository(data) {
        return new Promise(async (resolve, reject) => {

            try{
                console.log('[INFO]: save data on local repository');
                repository.save(data, () => {
                    console.log('[SUCCESS]: data saved on local repository.');
                    resolve();
                });
            } catch (err) {
                reject(err);
            }
            
        });
    }

    filter(state, name) {

        let projectFiltered = this.state.projects;

        if(state){
            projectFiltered = this.filterUF(state, projectFiltered)
        }

        if(name){
            projectFiltered = this.filterName(name, projectFiltered)
        }

        this.setState({
            projectsFiltered: projectFiltered,
            searchBy: {
                state: state,
                name: name
            }
        });
    }

    filterName(name, projectFiltered){
        
        projectFiltered = projectFiltered.filter((el) => {
            let projectName = el.name.toLowerCase();


            return projectName.includes(name.toLowerCase())
        });

        return projectFiltered;
    }

    filterUF(state, projectFiltered){
        projectFiltered = projectFiltered.filter((el) => {
            return el.uf === state
        });

        return projectFiltered;
    }

    handleSelectedFromChild(state, name) {
        this.filter(state, name);
        this.setState({
            hitSearch: true
        });
    }

    render() {

        let projects = (this.state.projectsFiltered.length === 0) ? this.state.projects : this.state.projectsFiltered;
        let filtenarName = this.state.searchBy.name;
        let stateName = this.state.searchBy.state;
        let resultsFound = this.state.projectsFiltered.length;
        let { hitSearch } = this.state;

        if(projects.length > 0){
            projects = projects.sort((project, nextProject) => {
                return project.name.localeCompare(nextProject.name)
            });
        }
        

        return (
            <section className="pageSection projectsPage">
            <BackButton/>
                {hitSearch > 0 &&
                    <div className="projectsPage__filterFeedback">
                        <span className="filterFeedback__title">Busca realizada:</span>
                        <p className="filterFeedback__group">
                            <strong className="groupFilter__label">Nome: </strong>
                            <span className="groupFilter__value">{filtenarName ? filtenarName : '-'}</span>
                        </p>
                        <p className="filterFeedback__group">
                            <strong className="groupFilter__label">Estado: </strong>
                            <span className="groupFilter__value">{stateName ? stateName : '-'}</span>
                        </p>
                        <p className="filterFeedback__group">
                            <strong className="groupFilter__label">Resultados encontrados: </strong>
                            <span className="groupFilter__value">{resultsFound}</span>
                        </p>
                    </div>
                }
                <Modal handleSelectedFilter={this.handleSelectedFromChild.bind(this)} projects={projects} />
                <div className='projectsPage__projectList'>
                    {projects.map((project) => {
                        return (
                            <div className="cardProject" key={project._id}>
                                <Link to={`/projects/${project._id}`}>
                                    {project.image &&
                                        <img src={project.image} alt={`Logo do projeto social ${project.name}`} className="cardProject__image" />
                                    }
                                    {!project.image &&
                                        <img src="./img/image_rede_social.png" alt="Logo da aplicação, estrela com as letras RS no meio. Rede Social." className="cardProject__image" />
                                    }
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

            </section>
        )

    }
}

export default Projects;