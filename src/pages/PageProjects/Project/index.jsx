import React from 'react';
import { Link } from 'react-router-dom';

import Api from '../../../service/api';
import './index.css';
import Button from '../../../components/Button';

import Repository from '../../../infrastructure/Repository';
const repository = new Repository();

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            project: {}
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
            let projectId = this.props.match.params.number;
            repository.retrieveOne(projectId, data => {
                this.setState({
                    project: data
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

            let projectId = this.props.match.params.number;
            Api.getProject(project => {
                this.setState({
                    project: project
                });
                resolve(projects);
            }, projectId);
        });
    }

    render() {

        let {project} = this.state;

        return (
            <section className="pageSection projectPage">
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
                        {/* <div className="projectInfo__group buttonGroup">
                            <Button enabled={project.volunteers} text="Quero ser voluntário!" />
                            <Button enabled={project.donation} text="Quero doar!" />
                        </div> */}
                    </div>
                </div>
            </section>
        )

    }
}

export default Project;