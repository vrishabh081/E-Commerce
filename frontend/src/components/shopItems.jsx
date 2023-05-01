import React, { useEffect, useState } from 'react'
import "../style/shop.css"
import {useSelector, useDispatch} from "react-redux"; 
import { getProductsFun } from '../redux/app/products/action';
import { Loader } from './loader';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCartFun, getCartFun } from '../redux/app/cart/action';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopItems = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.productReducer);
    const {isLoading, isError, products} = data;

    useEffect(()=> {
        dispatch(getProductsFun())
    }, [])

    useEffect(()=>{
        AOS.init ({duration: 2000})
    }, [])

    // addToCartHandler-
    const addToCartHandler = (el) => {
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            const payload = {
                name: el.name,
                productPic: el.productPic,
                quantity: 1,
                price: el.price,
                category: el.category,
            }
            dispatch(addCartFun(payload, user)).then(()=>{
                dispatch(getCartFun(user))
                toast.success("Added Successfully")
            })
        }
        if(user === undefined){
            toast.error("Please login first")
        }
    }

    return (
        <div>
        <div id="shop-items">
                {
                    products.products !== undefined && isLoading === false ? (
                        products.products.map((el)=><div key={el._id} >
                            <Link to={`/shopping/${el._id}`}>
                                <motion.img 
                                    src={el.productPic} 
                                    alt={el.name}
                                    data-aos="fade-zoom-in"
                                 />
                            </Link>
                            <div>
                                <p>{el.name}</p>
                                <p>&#x20B9; {el.price}</p>
                            </div>
                            <div>
                                <p>{el.category}</p>
                                <button onClick={()=>addToCartHandler(el)} className='main-btn'>+ Add</button>
                            </div>
                        </div>)
                    )
                    :
                    (
                        <Loader/>
                    )
                }
            </div>
    </div>
  )
}

export default ShopItems
