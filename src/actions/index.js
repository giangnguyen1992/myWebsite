import { SET_CONTENT } from './actionTypes';

export const setContent = content => {
    return {
        type: SET_CONTENT,
        payload: content
    }
};