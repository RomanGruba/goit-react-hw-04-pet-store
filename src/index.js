import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import pets from './components/pets.json';

ReactDOM.render(
  <BrowserRouter>
    <App items={pets} />
  </BrowserRouter>,
  document.getElementById('root'),
);
