import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

import bountyReducer from ('./reduxBounties.js');

const store = createStore(combineReducers({bounties:bountyReducer}, applyMiddleware(thunk));
store.subscribe(() => console.log('store',store.getState()));
export default store;