import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    products: [],
    singleProduct: {},
    isError: false
}

export const reducer = (state=initState, action) => {
    const {type, products, singleProduct} = action;

    switch(type){
        // all products-
        case types.GET_PRODUCTS_REQUEST :
            return {...state, isLoading: true}

        case types.GET_PRODUCTS_SUCCESS :
            return {...state, isLoading: false, products}

        case types.GET_PRODUCTS_ERROR :
            return {...state, isLoading: false, isError: true, products}

        // signle product-
        case types.GET_SINGLE_PRODUCT_REQUEST :
            return {...state, isLoading: true}

        case types.GET_SINGLE_PRODUCT_SUCCESS :
            return {...state, isLoading: false, singleProduct}

        case types.GET_SINGLE_PRODUCT_ERROR :
            return {...state, isLoading: false, isError: true, singleProduct}


        default :
            return {...state}
    }
}