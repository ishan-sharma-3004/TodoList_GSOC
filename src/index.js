import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./Redux/Store";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);