import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./auth/reducer";
import {reducer as productReducer} from "../redux/app/products/reducer";
import {reducer as cartReducer} from "../redux/app/cart/reducer";
import {reducer as adminReducer} from "../redux/app/admin/reducer";
import {reducer as orderReducer} from "../redux/app/order/reducer";

// store-
const rootReducer = combineReducers({
    authReducer, 
    productReducer, 
    cartReducer,
    adminReducer,
    orderReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));