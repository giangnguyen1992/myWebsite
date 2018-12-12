import { createStore } from 'redux';


import reducer from '../reducers/index';

const initialState = {
    main: 'project',
    modal: false,
    nightMode: false
};

export const store = createStore(reducer, initialState);