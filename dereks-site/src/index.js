import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
// import './home.css';

import {Provider} from 'react-redux';
import store from './redux/';
import {getPhotos, postPhoto, removePhoto} from "./redux/photos.js";
import {getBookings, postBooking} from './redux/bookings.js';

import {BrowserRouter}from 'react-router-dom';

import App from './App';

store.dispatch(getPhotos());
store.dispatch(postPhoto());
store.dispatch(removePhoto());
store.dispatch(postBooking());

ReactDOM.render(<Provider store ={store}>
    <BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
, document.getElementById("root"));
