import { SET_CONTENT, OPEN_MODAL, CLOSE_MODAL, SET_NIGHT } from './actionTypes';

export const setContent = content => {
    return {
        type: SET_CONTENT,
        payload: content
    }
};

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};

export const setNight = () => {
    return {
        type: SET_NIGHT
    }
};