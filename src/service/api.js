
const axios = require('axios');
// const urlApi = 'http://localhost:8000';
const urlApi = 'projetos.json';
//const urlApi = 'https://talitaoliveira.com.br/api-projects';

const getProjects = (callback) => {

    return new Promise((resolve, reject) => {
        axios.get(`${urlApi}`, {
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
        axios.get(`${urlApi}${id}`, {
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            
            resolve(callback(res.data));
        }).catch((err) => {
            reject();
        })
    })
}

const getOneProject = (callback, id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${urlApi}`, {
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            const project = res.data.filter((e)=>{ return e._id == id})
            console.log(project[0])
            resolve(callback(project[0]));
        }).catch((err) => {
            reject();
        })
    })
}

module.exports = {
    getProjects,
    getProject,
    getOneProject
}