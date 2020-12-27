import {
    ADD_LEAD,
    GET_LEADS
} from './types'

export const addLead = (lead) => {
    console.warn("Add lead", lead)
    return {
        type: ADD_LEAD,
        payload: lead
    }
}

export const getLeads = (lead) => {
    console.warn("Add lead", lead)
    return {
        type: GET_LEADS,
        payload: lead
    }
}