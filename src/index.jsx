import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import './assets/img/favicon.ico';
import './assets/css/index.css';
import './assets/css/reset.css';
import './assets/css/pure-min.css';


import App from './pages/App.jsx';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.querySelector('#main')
)
