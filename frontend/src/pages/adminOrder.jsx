import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getAllOrderFun } from '../redux/app/order/action';
import "../style/order.css";
import { Loader } from '../components/loader';
import EditOrderMenu from '../components/admin/editOrderMenu';

const AdminOrder = () => {
    const dispatch = useDispatch();
    const order = useSelector((store) => store.orderReducer);
    const {isLoading, isError, allOrderRes} = order;
    const {getItems} = allOrderRes;
    console.log(getItems)

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(getAllOrderFun(user))
        }
    }, [])


    return (
        <div id='user-order'>
            <h1>All Orders</h1>
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
                        <div id="main-edit-order-menu">
                            <div>
                                <h2>From {el.name}</h2>
                                <h3>Address</h3>
                                <p>{el.email}</p>
                                <p>Mobile - {el.shippingInfo.mobileNumber}</p>
                                <p>Whatsapp - {el.shippingInfo.whatsappNumber}</p>
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
                            <div id="edit-order-menu">
                                <EditOrderMenu />
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

export default AdminOrder
