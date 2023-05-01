import * as types from "./actionType.js";

// initial state-
const initState = {
    isLoading : false,
    signup: {},
    login: {},
    singleUserDetail: {},
    addressRes: {},
    isError: false
}

export const reducer = (state=initState, action) => {
    const {type, signup, login, singleUserDetail, addressRes} = action;

    switch(type){
        // sign up-
        case types.SIGN_UP_REQUEST :
            return {...state, isLoading: true}

        case types.SIGN_UP_SUCCESS :
            return {...state, isLoading: false, signup}

        case types.SIGN_UP_ERROR :
            return {...state, isLoading: false, isError: true, signup}

        
        // log in-
        case types.LOG_IN_REQUEST :
            return {...state, isLoading: true}

        case types.LOG_IN_SUCCESS :
            return {...state, isLoading: false, login}

        case types.LOG_IN_ERROR :
            return {...state, isLoading: false, isError: true, login}


        // get profile-
        case types.GET_PROFILE_REQUEST :
            return {...state, isLoading: true}

        case types.GET_PROFILE_SUCCESS :
            return {...state, isLoading: false, singleUserDetail}

        case types.GET_PROFILE_ERROR :
            return {...state, isLoading: false, isError: true, singleUserDetail}


        // get profile-
        case types.SET_ADDRESS_REQUEST :
            return {...state, isLoading: true}

        case types.SET_ADDRESS_SUCCESS :
            return {...state, isLoading: false, addressRes}

        case types.SET_ADDRESS_ERROR :
            return {...state, isLoading: false, isError: true, addressRes}


        default :
            return {...state}
    }
}