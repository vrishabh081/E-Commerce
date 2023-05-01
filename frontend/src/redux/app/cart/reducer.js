import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    cart: [],
    addCartRes: {},
    updateCartRes: {},
    deleteCartRes:{},
    deleteAllCartRes: {},
    isError: false
}

export const reducer = (state=initState, action) => {
    const {type, cart, addCartRes, updateCartRes, deleteCartRes, deleteAllCartRes} = action;

    switch(type){
        // get cart-
        case types.GET_CART_REQUEST :
            return {...state, isLoading: true}

        case types.GET_CART_SUCCESS :
            return {...state, isLoading: false, cart}

        case types.GET_CART_ERROR :
            return {...state, isLoading: false, isError: true, cart}


        // add cart-
        case types.ADD_CART_REQUEST :
            return {...state, isLoading: true}

        case types.ADD_CART_SUCCESS :
            return {...state, isLoading: false, addCartRes}

        case types.ADD_CART_ERROR :
            return {...state, isLoading: false, isError: true, addCartRes}


        // update cart-
        case types.UPDATE_CART_REQUEST :
            return {...state, isLoading: true}

        case types.UPDATE_CART_SUCCESS :
            return {...state, isLoading: false, updateCartRes}

        case types.UPDATE_CART_ERROR :
            return {...state, isLoading: false, isError: true, updateCartRes}


        // delete cart-
        case types.DELETE_CART_REQUEST :
            return {...state, isLoading: true}

        case types.DELETE_CART_SUCCESS :
            return {...state, isLoading: false, deleteCartRes}

        case types.DELETE_CART_ERROR :
            return {...state, isLoading: false, isError: true, deleteCartRes}


        // delete all cart-
        case types.DELETE_ALL_CART_REQUEST :
            return {...state, isLoading: true}

        case types.DELETE_ALL_CART_SUCCESS :
            return {...state, isLoading: false, deleteAllCartRes}

        case types.DELETE_ALL_CART_ERROR :
            return {...state, isLoading: false, isError: true, deleteAllCartRes}


        default :
            return {...state}
    }
}