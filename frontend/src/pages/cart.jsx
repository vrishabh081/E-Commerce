import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartFun, getCartFun, updateCartFun } from '../redux/app/cart/action';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineCloseCircle} from "react-icons/ai";
import "../style/cart.css";
import { Loader } from '../components/loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.cartReducer);
    const {isLoading, isError, cart} = data;

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(getCartFun(user))
        }
    }, [])

    useEffect(()=> {
        console.log(1)
        AOS.init ({duration: 2000})
    }, [])

    console.log(1)

    // deleteCartHandler
    const deleteCartHandler = (_id) => {
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(deleteCartFun(_id, user)).then(()=>{
                dispatch(getCartFun(user))
                toast.success("Deleted Successfully")
            })
        }
    }

    // increment qnt-
    const incQntHandler = (_id, q) => {
        let newQ = q+1
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(updateCartFun(_id, newQ, user)).then(()=>{
                dispatch(getCartFun(user))
            })
        } 
    }

    // decrement qnt-
    const decQntHandler = (_id, q) => {
        let newQ = q-1
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(updateCartFun(_id, newQ, user)).then(()=>{
                dispatch(getCartFun(user))
            })
        } 
    }

    // total-
    let totalSum = 0;
    if(cart.getItems !== undefined){
        let x = cart.getItems.map((el)=>el.price*el.quantity)
        for(let a of x){
            totalSum = totalSum + a;
        }
    }

    // local storage-
    let userDetails = JSON.parse(localStorage.getItem("user"));


    return (
        <motion.div id='cart'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Your Cart ({cart.getItems !== undefined && cart.getItems.length || 0})</h1>
            {
                cart.getItems !== undefined ? (
                    cart.getItems.map((el)=><div key={el._id}>
                        <div>
                            <motion.img 
                                src={el.productPic}
                                alt={el.name}
                                data-aos="fade-zoom-in"
                            />
                            <div>
                                <p>{el.name}</p>
                                <p>{el.category}</p>
                                <p>&#x20B9; {el.price}</p>
                            </div>
                            <div>
                                <button className='main-btn' disabled={el.quantity === 1} onClick={()=>decQntHandler(el._id, el.quantity)}>-</button>
                                <button className='main-btn'>{el.quantity}</button>
                                <button className='main-btn' onClick={()=>incQntHandler(el._id, el.quantity)}>+</button>
                            </div>
                            <div>
                            <p>&#x20B9; {el.quantity*el.price}</p>
                            </div>
                            <div id='fixed-remove-cart'>
                                <AiOutlineCloseCircle onClick={()=>deleteCartHandler(el._id)}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button className='main-btn' disabled={el.quantity === 1} onClick={()=>decQntHandler(el._id, el.quantity)}>-</button>
                                <button className='main-btn'>{el.quantity}</button>
                                <button className='main-btn' onClick={()=>incQntHandler(el._id, el.quantity)}>+</button>
                            </div>
                            <div>
                                <p>&#x20B9; {el.quantity*el.price}</p>
                            </div>
                        </div>
                    </div>
                )
            ) :(<Loader/>)
            }
            {
                userDetails !== null && (
                    <div id='final-price'>
                        <div>
                            <p>Grand total - &#x20B9; {totalSum}</p>
                        </div>
                        <Link to={"/checkout"}><button className='main-btn'>Checkout</button></Link>
                    </div>
                )
            }
        </motion.div>
    )
}

export default Cart
