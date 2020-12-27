import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types'
import 'axios'
import axios from "axios";
import {returnError} from './messages'


// Register User
export const register = (data)=>(dispatch)=>{
    console.warn("Register data",data,dispatch);
    const config ={
        headers:{
            'content-Type':"application/json"
        }
    };
//    Request body
    const body = JSON.stringify({username:data.username,email:data.email,password:data.password});
    console.log("Body value",body)
    axios
        .post('http://127.0.0.1:8000/api/auth/register/',body,config)
        .then((resp)=>{
            dispatch({
                type: REGISTER_SUCCESS,
                payload: resp.data,
            })
        })
        .catch((err)=>{
            dispatch(returnError(err.response.data,err.response.status));
            dispatch({
                type:REGISTER_FAILED
            });
        })

};

// Login User
export const login = (data) => {
    console.warn("LOGIN Action data", data);
    return {
        type: LOGIN_SUCCESS,
        data: data
    }
};

//set up config with token
export const tokenConfig=(getState)=>{

};