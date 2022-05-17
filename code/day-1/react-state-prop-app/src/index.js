import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//functional
//const appDesign = App() 

//vs.

//class
// const appComp = new App()
// const appDesign=appComp.render()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// {/* {appDesign} */ }
