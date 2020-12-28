import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticate: null,
    isLoading: null,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            console.warn("Register Success Reducer",state);
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticate: true,
                isLoading: false
            };
        default:
            return state
    }
}