import React from 'react'
import Products from '../components/products'
import { TopCarousel } from '../components/topCarousel'
import OrderItems from '../components/orderItems'
import { daalItems, dosaItems, paneerItems, riceItems, rotiItems } from '../assets/orderItems'
import { motion } from 'framer-motion'
import BgVideo from '../components/bgVideo'

const Home = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* <TopCarousel/> */}
      <BgVideo/>
      <OrderItems orderItem={paneerItems} title={"Paneer"} />
      <OrderItems orderItem={daalItems} title={"Daal"} />
      <OrderItems orderItem={riceItems} title={"Rice"} />
      <OrderItems orderItem={rotiItems} title={"Roti"} />
      <OrderItems orderItem={dosaItems} title={"Dosa"} />
    </motion.div>
  )
}

export default Home
