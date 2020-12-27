import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/types'

const initialState = {
    isAuthenticate: null,
    isLoading: null,
    user: null
};

export default function (state = initialState, action) {
    switch (action) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticate: true,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            
        default:
            return state
    }
}