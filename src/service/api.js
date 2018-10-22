
const axios = require('axios');
// const urlApi = 'http://localhost:8000';
const urlApi = 'https://talitaoliveira.com.br/api-projects';

const getProjects = (callback) => {

    return new Promise((resolve, reject) => {
        axios.get(`${urlApi}/projects/`, {
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            resolve(callback(res.data));
        }).catch((err) => {
            reject();
        })
    })
}

const getProject = (callback, id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${urlApi}/projects/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            resolve(callback(res.data));
        }).catch((err) => {
            reject();
        })
    })
}

module.exports = {
    getProjects,
    getProject
}