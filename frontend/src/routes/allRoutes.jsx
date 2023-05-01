import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedRoutes from './animatedRoutes';

const AllRoutes = () => {
  return (
    <>
      <AnimatedRoutes/>
      <ToastContainer theme="colored" style={{zIndex:1000}} />
    </>
  )
}

export default AllRoutes
