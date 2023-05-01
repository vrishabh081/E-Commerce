import React, { useEffect } from 'react'
import "../style/shop.css"
import {useSelector, useDispatch} from "react-redux"; 
import { getSingleProductFun } from '../redux/app/products/action';
import { useParams } from 'react-router-dom'
import { Loader } from '../components/loader';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { addCartFun, getCartFun } from '../redux/app/cart/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleOrderPage = () => {
    // redux and react state-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.productReducer);
    const {singleProduct} = data;
    const {product} = singleProduct;

    const {_id} = useParams();

    // get function-
    useEffect(()=> {
        dispatch(getSingleProductFun(_id))
        AOS.init ({duration: 2000})
    }, [])

    // addToCartHandler-
    const addToCartHandler = () => {
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            const payload = {
                name: product.name,
                productPic: product.productPic,
                quantity: 1,
                price: product.price,
                category: product.category,
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

    const x = singleProduct.product

    return (
        <motion.div id='single-order-page'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {
                x !== undefined ?
                (<>
                    <h1>{x.category}</h1>
                    <div>
                        <motion.img 
                            src={x.productPic}
                            alt={x.name}
                            data-aos="fade-zoom-in"
                        />
                        <div>
                            <div>
                                <p>{x.name}</p>
                                <p>&#x20B9; {x.price}</p>
                            </div>
                            <div>
                                <button data-aos={"fade-left"} className='main-btn' onClick={()=>addToCartHandler()}>+ Add</button>
                                <button data-aos={"fade-right"} className='main-btn'>Like</button>
                            </div>
                        </div>
                    </div>
                </>)
                :
                (<Loader/>)
            }
        </motion.div>
    )
}

export default SingleOrderPage
