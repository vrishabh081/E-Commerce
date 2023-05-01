import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCartFun, getCartFun } from '../../redux/app/cart/action';
import { sendOrderFun } from '../../redux/app/order/action';
import { getProfileFun } from '../../redux/auth/action';
import { useNavigate } from 'react-router-dom';

const Bill = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((store) => store.cartReducer);
    const {isLoading, cart} = data;
    const profile = useSelector((store) => store.authReducer);
    const {singleUserDetail} = profile;

    const order = useSelector((store) => store.orderReducer);

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(getCartFun(user))
            dispatch(getProfileFun(user))
        }
    }, [])

    // MRP-
    let MRP = 0;
    if(cart.getItems !== undefined){
        let x = cart.getItems.map((el)=>el.price*el.quantity)
        for(let a of x){
            MRP = MRP + a;
        }
    }

    // GST-
    let GST = 0;
    if(cart.getItems !== undefined){
        GST = MRP * 18 /100;
    }


    // Shipping charges-
    let ShippingCharge = 150;


    // Amount Payable-
    let AmountPayable = 0;
    if(cart.getItems !== undefined){
        AmountPayable = MRP + GST + ShippingCharge;
    }

    // orderHandler-
    const orderHandler = () => {
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        const payload = {
            name: singleUserDetail.userDetails.name || "",
            email: singleUserDetail.userDetails.email || "",
            products: cart.getItems,
            paymentMethod: "Cash on delivery",
            shippingPrice: ShippingCharge,
            gst: GST,
            totalPrice: MRP,
            payableAmount: AmountPayable,
            shippingInfo: {
                mobileNumber: singleUserDetail.userDetails.address.mobileNumber || "",
                country: singleUserDetail.userDetails.address.country || "",
                state: singleUserDetail.userDetails.address.state || "",
                city: singleUserDetail.userDetails.address.city || "",
                pinCode: singleUserDetail.userDetails.address.pinCode || "",
                homeAddress: singleUserDetail.userDetails.address.homeAddress || ""
            }
        }

        if(user !== undefined){
            dispatch(sendOrderFun(payload, user)).then(()=>{
                dispatch(deleteAllCartFun(user))
                dispatch(getCartFun(user))
                navigate("/successfull-order")
            })
        }
    }
    // console.log(order);
    // console.log(singleUserDetail)


    return (
        <div id='bill'>
            <h3>Your Bill</h3>
            <div>
                <div>
                    <p>MRP</p>
                    <p>&#x20B9; {MRP}</p>
                </div>
                <div>
                    <p>GST</p>
                    <p>&#x20B9; {GST} (18%)</p>
                </div>
                <div>
                    <p>Shipping Charges</p>
                    <p>&#x20B9; {MRP === 0 ? 0 : ShippingCharge}</p>
                </div>
                <div>
                    <p>Amount Payable</p>
                    <p>&#x20B9; {MRP === 0 ? 0 : AmountPayable}</p>
                </div>
                <p style={{fontSize: "0.8rem", marginTop:"1.5rem"}}>* Now, we have only cash on delivery method.</p>
                <button className='main-btn' onClick={()=>orderHandler()}>{isLoading === true ? "..wait" : "Proceed To Payment"}</button>
            </div>
        </div>
    )
}

export default Bill
