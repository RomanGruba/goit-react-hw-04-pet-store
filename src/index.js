import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import pets from './components/pets.json';

ReactDOM.render(
  <HashRouter basename="/">
    <App items={pets} />
  </HashRouter>,
  document.getElementById('root'),
);
