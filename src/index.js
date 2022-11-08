import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
=======
import { BrowserRouter } from 'react-router-dom';
import App from './App';
>>>>>>> c51594e56216fb4e537d0bcf41a6d7f59e8542cf

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
