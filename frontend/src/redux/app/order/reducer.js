import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    sendOrderRes: {},
    userOrderRes: [],
    allOrderRes: [],
    isError: false
}

export const reducer = (state=initState, action) => {
    const {type, sendOrderRes, userOrderRes, allOrderRes} = action;

    switch(type){
        // send order-
        case types.SEND_ORDER_REQUEST :
            return {...state, isLoading: true}

        case types.SEND_ORDER_SUCCESS :
            return {...state, isLoading: false, sendOrderRes}

        case types.SEND_ORDER_ERROR :
            return {...state, isLoading: false, isError: true, sendOrderRes}


        // user order-
        case types.GET_USER_ORDER_REQUEST :
            return {...state, isLoading: true}

        case types.GET_USER_ORDER_SUCCESS :
            return {...state, isLoading: false, userOrderRes}

        case types.GET_USER_ORDER_ERROR :
            return {...state, isLoading: false, isError: true, userOrderRes}


        // get all order-
        case types.GET_ALL_ORDER_REQUEST :
            return {...state, isLoading: true}

        case types.GET_ALL_ORDER_SUCCESS :
            return {...state, isLoading: false, allOrderRes}

        case types.GET_ALL_ORDER_ERROR :
            return {...state, isLoading: false, isError: true, allOrderRes}


        default :
            return {...state}
    }
}