import { serverName } from "../../serverName";
import * as types from "./actionType";
import axios from "axios"; 

// send order-
export const sendOrderFun = (payload, user) => (dispatch) => {
    dispatch({type: types.SEND_ORDER_REQUEST})
    return axios.post(`${serverName}/api/v1/send-order`, payload, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.SEND_ORDER_SUCCESS, sendOrderRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.SEND_ORDER_ERROR, sendOrderRes: err.response.data})
            })
}

// get user order-
export const getUserOrderFun = (user) => (dispatch) => {
    dispatch({type: types.GET_USER_ORDER_REQUEST})
    return axios.get(`${serverName}/api/v1/user-order`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.GET_USER_ORDER_SUCCESS, userOrderRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.GET_USER_ORDER_ERROR, userOrderRes: err.response.data})
            })
}

// send order-
export const getAllOrderFun = (user) => (dispatch) => {
    dispatch({type: types.GET_ALL_ORDER_REQUEST})
    return axios.get(`${serverName}/api/v1/all-order`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.GET_ALL_ORDER_SUCCESS, allOrderRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.GET_ALL_ORDER_ERROR, allOrderRes: err.response.data})
            })
}