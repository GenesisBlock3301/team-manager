import {ADD_LEAD} from '../actions/types'

const initialState = {
    leads:[]
};

export default function (state=initialState,action) {
    switch (action.type) {
        case ADD_LEAD:
            return {
                ...state,
                leads: action.payload
            }
        default:
            return state
    }
}