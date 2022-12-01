import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css'

import './index.css';
import './App.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>
)
