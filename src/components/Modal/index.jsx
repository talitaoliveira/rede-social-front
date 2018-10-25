import React from 'react';

import './index.css';

export default function Modal(props) {

    var handleToUpdate = props.handleSelectedFilter;

    function openModal() {
        var favDialog = document.getElementById('favDialog');
        favDialog.style.visibility = 'visible';
    }

    function closeModal() {
        var favDialog = document.getElementById('favDialog');
        favDialog.style.visibility = 'hidden';

    }

    function sendFilter() {
        let stateChoosed = document.getElementById('filter__state').value;
        let nameIputed = document.getElementById('filter__name').value;
        closeModal();
        handleToUpdate(stateChoosed, nameIputed);
    }

    function getAllStates(projects) {
        let states = [];
        
        if (projects.length > 0) {
            states = projects.map(project => {
                return project.uf
            });
            console.log(states)
        }

    }

    return (

        <div className="filterComponent">
            <div id="favDialog" className="modalFilter">
                <div className="modalFilter__header">
                    <h2 className="header__title">Buscar</h2>
                    <span className="header__close" onClick={() => closeModal()}>
                        <i className="far fa-times-circle header__close-icon"></i>
                    </span>
                </div>
                <section className="modalFilter__section" >
                    <label htmlFor="filter__name" className="filter__label">Buscar por nome:</label>
                    <input type="text" id="filter__name" className="filter__value filter__name" />
                </section>
                <section className="modalFilter__section">
                    <label htmlFor="filter__state" className="filter__label">Buscar por estado:</label>
                    <select name="filter__state" className="filter__value filter__state" id="filter__state">
                        <option value="">Selecione</option>
                        <option value="PE">PE</option>
                        {/* {Object.keys(props.projects).forEach((project) => {
                            console.log(props.projects[project].uf)
                            return (
                                <option value={props.projects[project].uf}>{props.projects[project].uf}</option>
                            ); */}
                        })}
                    </select>
                </section>
                <button className={`pure-button button-xlarge`} onClick={() => sendFilter()}>
                    Clica
                </button>
            </div>
            <button className='filterComponent__button' onClick={() => openModal()} alt="Busca">
                <i className="fas fa-search"></i>
            </button>
        </div>
    )

}
