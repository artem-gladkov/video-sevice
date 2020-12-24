import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/scss/main.scss'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import store from "./redux/redux";
import {Provider} from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
