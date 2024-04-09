import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import LandingPage from './LandingPage'
// import TODO from './TODO'
import Studentreg from './studentreg'

// import Calculator from './calculator'; // Import with PascalCase
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <  Studentreg/>
  </React.StrictMode>
);

reportWebVitals();