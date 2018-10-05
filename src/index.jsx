import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './assets/img/favicon.ico';
import './assets/css/index.css';
import './assets/css/reset.css';
import './assets/css/pure-min.css';


import App from './pages/App.jsx';

ReactDOM.render(
    <BrowserRouter basename="/rede-social">
        <App />
    </BrowserRouter>,
    document.querySelector('#main')
)
