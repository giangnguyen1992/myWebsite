import { createStore } from 'redux';
import reducer from '../reducers/index';

const initialState = {
    main: 'about'
};

export const store = createStore(reducer, initialState);