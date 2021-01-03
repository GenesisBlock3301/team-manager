import {
    ADD_LEAD, DELETE_LEAD,
    GET_LEADS
} from './types'
import axios from "axios";
import {tokenConfig} from "./auth";
import {returnError} from "./messages";


export const addLead = (lead)=>(dispatch,getState)=> {
    // console.warn("Add lead", lead)
    axios.post('http://127.0.0.1:8000/api/leads/',lead,tokenConfig(getState))
        .then((res)=>{
           dispatch({
               type:ADD_LEAD,
               payload:res.data
           })
        })
        .catch((err)=>(dispatch(returnError(err.response.data,err.response.status))));
};


export const getLeads = ()=>(dispatch,getState) => {
    // console.warn("Get leads Action");
    axios
        .get('http://127.0.0.1:8000/api/leads/',tokenConfig(getState))
        .then((res)=>{
            dispatch({
                type:GET_LEADS,
                payload: res.data
            })
        })
        .catch((err)=>console.log(err))
};

export const deleteLead=(id)=>(dispatch,getState)=>{
    // console.log("Delete action",id);
    axios
        .delete(`http://127.0.0.1:8000/api/leads/${id}`,tokenConfig(getState))
        .then((res)=>{
            dispatch({
                type: DELETE_LEAD,
                payload:id
            })
        })
        .catch((err)=>dispatch(returnError(err.response.data,err.response.status)))
}