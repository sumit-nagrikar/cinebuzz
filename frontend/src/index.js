import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Create a root for ReactDOM
const root = document.getElementById('root');

// Render your app inside the root using ReactDOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
