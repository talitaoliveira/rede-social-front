import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import Api from '../../../service/api';

import Modal from '../../../components/Modal';
import Repository from '../../../infrastructure/Repository';

const repository = new Repository();
class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            projectsFiltered: []
        }
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        try {
            this.getDataFromRepository().then(() => {
                console.log('[SUCCESS]: getDataFromRepository');
            }).catch(() => {
                console.warn('[WARNIGN]: Nothing on local repository. GetDataFromAPI');
                this.getDataFromAPI().then((data) => {
                    console.log('[SUCCESS]: getDataFromAPI');
                    this.saveDataOnRepository(data);
                }).catch(() => {
                    console.log('[APPLICATION ERROR]: Fail to retrieve data from API');
                })
            });
        } catch (err) {
            console.error('[APPLICATION ERROR]: ', error);
        }
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
            Api.getProjects(projects => {
                this.setState({
                    projects: projects
                });
                resolve(projects);
            });
        });
    }

    saveDataOnRepository(data) {
        return new Promise((resolve, reject) => {
            console.log('[INFO]: save data on local repository');
            repository.save(data, () => {
                console.log('[SUCCESS]: data saved on local repository.');
                resolve();
            });
        });
    }

    filter(state, name) {

        let projectFiltered = this.state.projects;

        projectFiltered = projectFiltered.filter((el) => {

            let projectName = el.name.toLowerCase();
            return projectName.includes(name) && el.uf === state
        });

        this.setState({
            projectsFiltered: projectFiltered
        });
    }

    handleToUpdate(someArg) {
        alert('We pass argument from Child to Parent: ' + someArg);
        this.setState({ arg1: someArg });
    }

    handleSelectedFromChild(state, name) {
        this.filter(state, name);

    }

    render() {

        let projects = (this.state.projectsFiltered.length === 0) ? this.state.projects : this.state.projectsFiltered;

        return (
            <section className="pageSection projectsPage">

                <Modal handleSelectedFilter={this.handleSelectedFromChild.bind(this)} />
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

            </section>
        )

    }
}

export default Projects;