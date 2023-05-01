import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


const OrderItems = (x) => {
    useEffect(()=>{
        AOS.init ({duration: 2000})
    }, [])

    return (
        <div id='order-items'>
            <h2>{x.title}</h2>
            <motion.div
            >
                {
                    x.orderItem.map((el)=><motion.div key={el.id} data-aos="fade-up">
                        <Link to="/shopping">
                            <motion.img 
                                src={el.pic} 
                                alt={el.id} 
                                transition={{duration: 3, delay: 0.3}}
                                whileHover={{scale: 1.1, opacity: 0.6}}
                            />
                        </Link>
                    </motion.div>)
                }
            </motion.div>
        </div>
    )
}

export default OrderItems
