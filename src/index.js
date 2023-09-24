import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Footer from './containers/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
