import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logInFun } from '../redux/auth/action';
import {Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

const Login = () => {
  // use state-
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // router-dom and redux-
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reducer = useSelector((store)=>store.authReducer);
  const {isLoading, isError, login} = reducer;

  // sumit handler-
  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {email, password}
    dispatch(logInFun(payload))
  }

  // use effect-
  useEffect(()=> {
    if(login.error !== undefined){
    toast.error((login.error))
      login.error = undefined;
    }
    if(login.message !== undefined){
      toast.success(login.message)
      localStorage.setItem("user", JSON.stringify(login.user))
      login.message = undefined;
      navigate("/")
      window.location.reload(true);
    }
    
  }, [login])

  return (
    <motion.div id='auth'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h1>Log in</h1>
      <form onSubmit={submitHandler}>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <input type="submit" value={isLoading === true ? "...wait" : "Submit"} style={{width:"100%", margin:"1rem 0", cursor:'pointer'}} />
      </form>
      <p>Don't have an account? <Link to={"/signup"}>sign up</Link></p>
    </motion.div>
  )
}

export default Login
