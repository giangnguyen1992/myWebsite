import { SET_CONTENT, OPEN_MODAL, CLOSE_MODAL } from '../actions/actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CONTENT:
            return {
                ...state,
                main: action.payload
            }
        case OPEN_MODAL:
            return {
                ...state,
                modal: true
            } 
        case CLOSE_MODAL:   
            return {
                ...state,
                modal: false
            }       
        default:
         return state
    }
};

export default reducer;