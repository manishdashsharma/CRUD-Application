import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
