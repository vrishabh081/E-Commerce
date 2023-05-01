import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signUpFun } from '../redux/auth/action';
import {Link, useNavigate} from "react-router-dom";
import "../style/auth.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'


// sign up function-
const Signup = () => {
  // use state-
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // router-dom and redux-
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducer = useSelector((store)=>store.authReducer);
  const {isLoading, isError, signup} = reducer;

  // sumit handler-
  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {name, email, password}

    dispatch(signUpFun(payload))
  }

  // use effect-
  useEffect(()=> {
    if(signup.error !== undefined){
    toast.error((signup.error))
      signup.error = undefined;
    }
    if(signup.message !== undefined){
      toast.success(signup.message)
      signup.message = undefined;
      navigate("/login")
    }
    
  }, [signup])


  return (
    <motion.div id='auth'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h1>Sign up</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" value={isLoading===true ? "...wait" : "Submit"} style={{width:"100%", margin:"1rem 0", cursor:'pointer'}} />
      </form>
      <p>Already have an account? <Link to={"/login"}>log in</Link></p>
    </motion.div>
  )
}

export default Signup
