

import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
    products: [],
    reviews: {},
    cart: {}
};

export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());