import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './img/favicon.ico';
import './css/index.css';
import './css/pure-min.css';

import App from './components/App.jsx';

ReactDOM.render(
    <BrowserRouter basename="/rede-social">
        <App />
    </BrowserRouter>,
    document.querySelector('#main')
)
