import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    getProductAdmin: [],
    addProductRes: {},
    updateProductRes: {},
    deleteProductRes: {},
    isError: false
}

// reducer-
export const reducer = (state=initState, action) => {
    const {type, getProductAdmin, addProductRes, updateProductRes, deleteProductRes} = action;

    switch(type){
        // get all products-
        case types.GET_ADMIN_PRODUCT_REQUEST :
            return {...state, isLoading: true}

        case types.GET_ADMIN_PRODUCT_SUCCESS :
            return {...state, isLoading: false, getProductAdmin}

        case types.GET_ADMIN_PRODUCT_ERROR :
            return {...state, isLoading: false, isError: true, getProductAdmin}


        // add new product-
        case types.ADD_NEW_PRODUCT_REQUEST :
            return {...state, isLoading: true}

        case types.ADD_NEW_PRODUCT_SUCCESS :
            return {...state, isLoading: false, addProductRes}

        case types.ADD_NEW_PRODUCT_ERROR :
            return {...state, isLoading: false, isError: true, addProductRes}


        // update product-
        case types.UPDATE_PRODUCT_REQUEST :
            return {...state, isLoading: true}

        case types.UPDATE_PRODUCT_SUCCESS :
            return {...state, isLoading: false, updateProductRes}

        case types.UPDATE_PRODUCT_ERROR :
            return {...state, isLoading: false, isError: true, updateProductRes}


        // delete product-
        case types.DELETE_NEW_PRODUCT_REQUEST :
            return {...state, isLoading: true}

        case types.DELETE_NEW_PRODUCT_SUCCESS :
            return {...state, isLoading: false, deleteProductRes}

        case types.DELETE_NEW_PRODUCT_ERROR :
            return {...state, isLoading: false, isError: true, deleteProductRes}


        default :
            return {...state}
    }
}