import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import photosReducer from "./photos.js";
import bookingsReducer from './bookings.js';

const globalState = {
    photos: photosReducer,
    bookings: bookingsReducer
};

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;