import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer from '../reducers/index';

const initialState = {
    main: 'about',
    modal: false
};

export const store = createStore(reducer, initialState, applyMiddleware(logger));