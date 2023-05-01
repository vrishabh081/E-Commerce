import { serverName } from "../serverName.js";
import * as types from "./actionType.js";
import axios from "axios"; 

// sign up-
export const signUpFun = (payload) => (dispatch) => {
    dispatch({type: types.SIGN_UP_REQUEST})
    return axios.post(`${serverName}/api/v1/register`, payload)
            .then((res)=>{
                console.log(res.data)
                dispatch({type: types.SIGN_UP_SUCCESS, signup: res.data})
            })
            .catch((err)=>{
                console.log(err.response.data)
                dispatch({type: types.SIGN_UP_ERROR, signup: err.response.data})
            })
}


// log in-
export const logInFun = (payload) => (dispatch) => {
    dispatch({type: types.LOG_IN_REQUEST})
    return axios.post(`${serverName}/api/v1/login`, payload)
            .then((res)=>{
                console.log(res.data)
                dispatch({type: types.LOG_IN_SUCCESS, login: res.data})
            })
            .catch((err)=>{
                console.log(err.response.data)
                dispatch({type: types.LOG_IN_ERROR, login: err.response.data})
            })
}


// get profile-
export const getProfileFun = (user) => (dispatch) => {
    dispatch({type: types.GET_PROFILE_REQUEST})
    return axios.get(`${serverName}/api/v1/single-user-detail`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                dispatch({type: types.GET_PROFILE_SUCCESS, singleUserDetail: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.GET_PROFILE_ERROR, singleUserDetail: err.response.data})
            })
}


// add cart-
export const setAddressFun = (payload, user) => (dispatch) => {
    dispatch({type: types.SET_ADDRESS_REQUEST})
    return axios.patch(`${serverName}/api/v1/set-address`, payload, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.SET_ADDRESS_SUCCESS, addressRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.SET_ADDRESS_ERROR, addressRes: err.response.data})
            })
}