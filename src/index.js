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

ReactDOM.render(
<BrowserRouter>
  <App /> 
</BrowserRouter>,
document.getElementById('root'));