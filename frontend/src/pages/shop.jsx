import React, { useEffect, useState } from 'react'
import "../style/shop.css"
import {useSelector, useDispatch} from "react-redux"; 
import { getProductsFun } from '../redux/app/products/action';
import ShopItems from '../components/shopItems';
import { motion } from 'framer-motion'

const Shop = () => {
    const [filter, setFilter] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((store) => store.productReducer);
    const {isLoading, isError, products} = data;

    // get function-
    useEffect(()=> {
        dispatch(getProductsFun(filter))
    }, [filter])


    return (
            <motion.div id='shop'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>Order {filter || "something"}</h1>
                <div id="filter-sort-section">
                    <select onChange={(e)=>setFilter(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Paneer">Paneer</option>
                        <option value="Rice">Rice</option>
                        <option value="Roti">Roti</option>
                        <option value="Dosa">Dosa</option>
                        <option value="Daal">Daal</option>
                    </select>
                </div>
                <ShopItems filter={filter} products={products} />
            </motion.div>
    )
}

export default Shop
