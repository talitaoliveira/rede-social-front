
const axios = require('axios');
const urlApi = 'http://localhost:8000';

const getProjects = (callback) => {
    axios.get(`${urlApi}/projects/`, {
        headers: {'Content-Type': 'application/json'}
    }).then((res) => {
        return callback(res.data);
    }).catch((err) => {
        return callback({error: err});
    })
}

module.exports = {
    getProjects
}