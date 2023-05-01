import { serverName } from "../../serverName";
import * as types from "./actionType";
import axios from "axios"; 

// get cart-
export const getProductFunAdmin = (user) => (dispatch) => {
    dispatch({type: types.GET_ADMIN_PRODUCT_REQUEST})
    return axios.get(`${serverName}/api/v1/products-admin`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                dispatch({type: types.GET_ADMIN_PRODUCT_SUCCESS, getProductAdmin: res.data})
            })
            .catch((err)=>{
                dispatch({type: types.GET_ADMIN_PRODUCT_ERROR, getProductAdmin: err.response.data})
            })
}

// add new product-
export const addNewProductFun = (payload, user) => (dispatch) => {
    dispatch({type: types.ADD_NEW_PRODUCT_REQUEST})
    return axios.post(`${serverName}/api/v1/add-product`, payload, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.ADD_NEW_PRODUCT_SUCCESS, addProductRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.ADD_NEW_PRODUCT_ERROR, addProductRes: err.response.data})
            })
}

// update product-
export const updateProductFunAdmin = (payload, user, _id) => (dispatch) => {
    dispatch({type: types.UPDATE_PRODUCT_REQUEST})
    return axios.patch(`${serverName}/api/v1/update-product/${_id}`, payload, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.UPDATE_PRODUCT_SUCCESS, updateProductRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.UPDATE_PRODUCT_ERROR, updateProductRes: err.response.data})
            })
}

// delete new product-
export const deleteProductFunAdmin = (_id, user) => (dispatch) => {
    dispatch({type: types.DELETE_NEW_PRODUCT_REQUEST})
    return axios.delete(`${serverName}/api/v1/delete-product/${_id}`, { headers: {"Authorization" : `${user}`} })
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.DELETE_NEW_PRODUCT_SUCCESS, deleteProductRes: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.DELETE_NEW_PRODUCT_ERROR, deleteProductRes: err.response.data})
            })
}

