import { GET_ERRORS, CLEAR_ERRORS, ADDING_SUCCESS } from '../Actions/types';
const initialState = {
    msg: {},
    status: null,
    id: null,
    added: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case ADDING_SUCCESS:
                return {
                    added: true
                }
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null,
                added: null
            };
        default:
            return state;
    }
}