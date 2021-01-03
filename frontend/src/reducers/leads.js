import {ADD_LEAD, DELETE_LEAD, GET_LEADS} from '../actions/types'

const initialState = {
    leads:[]
};

export default function (state=initialState,action) {
    switch (action.type) {
        case ADD_LEAD:
            console.log("ADD lead",action.payload)
            return {
                ...state,
                leads: [...state.leads,action.payload],
            };
        case GET_LEADS:
            console.log("GET Leads",action.payload);
            return{
                ...state,
                leads:action.payload
            };
        case DELETE_LEAD:
            return{
                ...state,
                leads:state.leads.filter((lead)=>lead.id !== action.payload)
            };
        default:
            return state
    }
}