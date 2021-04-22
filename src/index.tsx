import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Getstarted from './Getstarted';
import reportWebVitals from './reportWebVitals';
import swDev from './swDev';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Getstarted />
  </React.StrictMode>,
  document.getElementById('root')
);
swDev();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
