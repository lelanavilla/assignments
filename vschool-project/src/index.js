import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import store from "./redux";
import './styles.css';
import {BrowserRouter} from 'react-router-dom';

import App from './App/';

ReactDOM.render(<BrowserRouter>
<Provider>
<App/>
</Provider>
</BrowserRouter>,
document.getElementById("root"));
