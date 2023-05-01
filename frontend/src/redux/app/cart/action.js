import { serverName } from "../../serverName";
import * as types from "./actionType";
import axios from "axios"; 

// get cart-
export const getCartFun = (user) => (dispatch) => {
    dispatch({type: types.GET_CART_REQUEST})
    return axios.get(`${serverName}/api/v1/cart`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                dispatch({type: types.GET_CART_SUCCESS, cart: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.GET_CART_ERROR, cart: err.response.data})
            })
}

// add cart-
export const addCartFun = (payload, user) => (dispatch) => {
    dispatch({type: types.ADD_CART_REQUEST})
    return axios.post(`${serverName}/api/v1/add-cart`, payload, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.ADD_CART_SUCCESS, addCartRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.ADD_CART_ERROR, addCartRes: err.response.data})
            })
}

// update cart-
export const updateCartFun = (_id, newQ, user) => (dispatch) => {

    dispatch({type: types.UPDATE_CART_REQUEST})
    return axios.patch(`${serverName}/api/v1/update-cart/${_id}`, {newQ}, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.UPDATE_CART_SUCCESS, updateCartRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.UPDATE_CART_ERROR, updateCartRes: err.response.data})
            })
}

// delete cart-
export const deleteCartFun = (_id, user) => (dispatch) => {
    dispatch({type: types.DELETE_CART_REQUEST})
    return axios.delete(`${serverName}/api/v1/delete-cart/${_id}`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.DELETE_CART_SUCCESS, deleteCartRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.DELETE_CART_ERROR, deleteCartRes: err.response.data})
            })
}

// delete all cart-
export const deleteAllCartFun = (user) => (dispatch) => {
    dispatch({type: types.DELETE_ALL_CART_REQUEST})
    return axios.delete(`${serverName}/api/v1/delete-all-cart`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.DELETE_ALL_CART_SUCCESS, deleteAllCartRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.DELETE_ALL_CART_ERROR, deleteAllCartRes: err.response.data})
            })
}
