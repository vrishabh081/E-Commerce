import { serverName } from "../../serverName";
import * as types from "./actionType";
import axios from "axios"; 

// get all products-
export const getProductsFun = (filter = "") => (dispatch) => {
    dispatch({type: types.GET_PRODUCTS_REQUEST})
    return axios.get(`${serverName}/api/v1/products?category=${filter}`, )
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.GET_PRODUCTS_SUCCESS, products: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.GET_PRODUCTS_ERROR, products: err.response.data})
            })
}

// get single product-
export const getSingleProductFun = (_id) => (dispatch) => {
    dispatch({type: types.GET_SINGLE_PRODUCT_REQUEST})
    return axios.get(`${serverName}/api/v1/product/${_id}`, )
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: types.GET_SINGLE_PRODUCT_SUCCESS, singleProduct: res.data})
            })
            .catch((err)=>{
                // console.log(err.response.data)
                dispatch({type: types.GET_SINGLE_PRODUCT_ERROR, singleProduct: err.response.data})
            })
}
