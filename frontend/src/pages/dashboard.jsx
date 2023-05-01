import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFunAdmin, getProductFunAdmin } from '../redux/app/admin/action';
import { Loader } from '../components/loader';
import { Link } from 'react-router-dom';
import {AiOutlineEye, AiOutlineCloseCircle} from "react-icons/ai";
import "../style/admin.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProduct from '../components/admin/editProduct';
import { motion } from 'framer-motion'

const Dashboard = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.adminReducer);
    const {getProductAdmin} = data;

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;
        // console.log(user);

        if(user !== undefined){
            dispatch(getProductFunAdmin(user))
        }
    }, [])

    // product delete handler-
    const productDeleteHandler = (_id) => {
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(deleteProductFunAdmin(_id, user)).then(()=>{
                dispatch(getProductFunAdmin(user))
                toast.success("Product deleted successfully")
            })
        }
    }
    
    
    return (
            <motion.div id='dashboard-body'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>Dashboard</h1>
                <div>
                    {
                        (getProductAdmin.products !== undefined) ? (
                            getProductAdmin.products.map((el, index)=><div key={el._id}>
                                <p>{index+1}</p>
                                <p>{el.name}</p>
                                <Link to={`/shopping/${el._id}`}><AiOutlineEye/></Link>
                                <EditProduct el={el} />
                                <span onClick={() => productDeleteHandler(el._id)}><AiOutlineCloseCircle/></span>
                            </div>)
                        ) : (
                            <Loader/>
                        )
                    }
                </div>
            </motion.div>
    )
}

export default Dashboard

