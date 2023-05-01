import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getUserOrderFun } from '../redux/app/order/action';
import "../style/order.css";
import { Loader } from '../components/loader';

const UserOrder = () => {
    const dispatch = useDispatch();
    const order = useSelector((store) => store.orderReducer);
    const {isLoading, isError, userOrderRes} = order;
    const {getItems} = userOrderRes;

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(getUserOrderFun(user))
        }
    }, [])


    return (
        <div id='user-order'>
            <h1>Your Orders</h1>
            <div>
            {
                getItems !== undefined ? (
                    getItems.map((el)=><div key={el._id}>
                        <div>
                            {
                                el.products !== undefined && (
                                    el.products.map((pro)=><div key={pro._id} id='user-order-products'>
                                        <div>
                                            <div>
                                                <img src={pro.productPic} alt={pro.name} />
                                            </div>
                                            <div>
                                                <p>{pro.name}</p>
                                                <p>Price - &#x20B9; {pro.price}</p>
                                                <p>Quantity - {pro.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                )
                            }
                        </div>
                        <div>
                            <div>
                                <h3>Address</h3>
                                <p>{el.shippingInfo.mobileNumber}</p>
                                <p>{el.shippingInfo.homeAddress} ({el.shippingInfo.pinCode})</p>
                                <p>{el.shippingInfo.city}, {el.shippingInfo.state}, {el.shippingInfo.country}</p>
                            </div>
                            <div>
                                <h3>Summary</h3>
                                <p>Total Price - &#x20B9; {el.totalPrice}</p>
                                <p>GST - &#x20B9; {el.gst} (18%)</p>
                                <p>Payable Amount - &#x20B9; {el.payableAmount}</p>
                                <p>Payment Method - {el.paymentMethod}</p>
                                <p>Status - <span style={{fontWeight:600}}>{el.status} ...</span></p>
                            </div>
                        </div>
                    </div>)
                ) : (
                    <Loader/>
                )
            }
            </div>
        </div>
    )
}

export default UserOrder
