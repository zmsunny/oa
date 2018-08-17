import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './router'
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
