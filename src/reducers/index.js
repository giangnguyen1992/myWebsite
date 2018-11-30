import { SET_CONTENT } from '../actions/actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CONTENT:
            return {
                ...state,
                main: action.payload
            }
        default:
         return state
    }
};

export default reducer;