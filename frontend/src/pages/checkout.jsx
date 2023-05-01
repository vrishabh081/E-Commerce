import React, { useEffect } from 'react'
import Address from '../components/checkout/address'
import Bill from '../components/checkout/bill'
import "../style/checkout.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProfileFun } from '../redux/auth/action';

const Checkout = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.authReducer);
    const {singleUserDetail} = data;

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(getProfileFun(user))
        }
    }, [])

    return (
        <div id='checkout'>
            <h1>Checkout</h1>
            <div>
                <Address singleUserDetail = {singleUserDetail}/>
                <Bill/>
            </div>
        </div>
    )
}

export default Checkout
