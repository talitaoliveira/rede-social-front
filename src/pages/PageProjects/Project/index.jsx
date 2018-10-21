import React from 'react';
import { Link } from 'react-router-dom';

import Api from '../../../service/api';
import './index.css';
import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton'

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
        this.getData().then(() => {
            console.log('ola')
        })
    }

    getData() {
        return new Promise((resolve, reject) => {
            try {
                this.getDataFromAPI().then(() => {
                    console.log('[SUCCESS]: getDataFromAPI');
                }).catch(() => {
                    console.log('[APPLICATION ERROR]: Fail to retrieve data from API');
                    this.getDataFromRepository().then((data) => {
                    console.log('[SUCCESS]: getDataFromRepository');
                    }).catch(() => {
                        console.warn('[WARNIGN]: Nothing on local repository. GetDataFromAPI');
                    })
                });
                resolve();
            } catch (err) {
                console.error('[APPLICATION ERROR]: ', error);
            }
        });
    }

    getDataFromRepository() {
        return new Promise(async (resolve, reject) => {
            let projectId = this.props.match.params.number;
            repository.retrieveOne(projectId, data => {
                data.description = this.formatDescription(data.description)
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
        return new Promise(async (resolve, reject) => {

            let projectId = this.props.match.params.number;
            Api.getProject(project => {
                project.description = this.formatDescription(project.description)
                this.setState({
                    project: project
                });
                resolve(project);
            }, projectId);
        });
    }

    formatDescription(description) {
        let descriptionSplit = description.split(';');
        let descriptionFormated = '';
        descriptionSplit.forEach((line)=>{
            descriptionFormated += `${line}\n`;
        });

        return descriptionFormated;

    }

    render() {

        let { project } = this.state;
        
        return (
            <section className="pageSection projectPage">
            <BackButton/>
                <div className="projectData">
                    <img src={project.image} alt="" className="projectData__image" />
                    <h1 className="projectData__title">{project.name}</h1>
                    <div className="projectInfo">
                        <div className="projectInfo__group">
                            <strong className="projectInfo__group-label">Descrição:</strong>
                            <p className="projectInfo__group-value">{project.description}</p>
                        </div>
                        <div className="projectInfo__group">
                            <strong className="projectInfo__group-label">Cidade - Estado:</strong>
                            <p className="projectInfo__group-value">{project.city} - {project.uf}</p>
                        </div>
                        <div className="projectInfo__group">
                            <strong className="projectInfo__group-label">Instagram:</strong>
                            <p className="projectInfo__group-value">
                                <a target="_blank" href={project.instagram ? project.instagram : '#'}>{project.instagram ? project.instagram : '-'}</a>
                            </p>
                        </div>
                        <div className="projectInfo__group">
                            <strong className="projectInfo__group-label">Facebook:</strong>
                            <p className="projectInfo__group-value">
                                <a target="_blank" href={project.website ? project.website : '#'}>{project.website ? project.website : '-'}</a>
                            </p>
                        </div>
                        <div className="projectInfo__group">
                            <strong className="projectInfo__group-label">Website:</strong>
                            <p className="projectInfo__group-value">
                                <a target="_blank" href={project.website ? project.website : '#'}>{project.website ? project.website : '-'}</a>
                            </p>
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