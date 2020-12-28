import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types'
import axios from "axios";
import {returnError} from './messages'

//Check token and Load User

//tokenConfigure
export const tokenConfig=(getState)=>{
  //  get token from state
  const token = getState.auth.token;
//  header
    const config ={
        headers:{
            "Content-Type": "application/json"
        }
    }
//    if token, add to header config
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
};
// Register User
export const register = (data, dispatch) => {
    console.warn("Register data", data, typeof dispatch);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
//    Request body
    const {username, email, password} = data;
    const body = JSON.stringify({username, email, password});
    console.log("Body value", body)
    axios
        .post('http://127.0.0.1:8000/api/auth/register/', body, config)
        .then((resp) => {
            console.warn("Register Response",resp.data)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: resp.data,
            });
        })
        .catch((err) => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAILED
            });
        })

};

// Login User
export const login = (data, dispatch) => {
    console.warn("LOGIN Action data", data);

    //Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    };
//    Request body
    const {username, password} = data;
    const body = JSON.stringify({username, password});
    // console.warn("Login",body)
    axios
        .post('http://127.0.0.1:8000/api/auth/login/', body, config)
        .then((res) => {
            // console.warn("Login Response",res.data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            // console.log("Error")
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAILED
            });
        });

    return {
        type: LOGIN_SUCCESS,
        data: data
    }
};

//User logout
export const logout=(dispatch)=>{
    console.log("Logout Action")
    
};
//set up config with token
export const tokenConfig = (getState) => {
    
};

