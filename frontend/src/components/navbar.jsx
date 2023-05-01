import { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";
import {NavLink} from "react-router-dom";
import "../style/navbar.css";
import AccountMenu from "./account";
import { useDispatch, useSelector } from "react-redux";
import { getCartFun } from "../redux/app/cart/action";

const Navbar = () => {
  const navRef = useRef();
  const dispatch = useDispatch();
    const data = useSelector((store) => store.cartReducer);
    const {isLoading, isError, cart} = data;

    // use effect-
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(getCartFun(user))
        }
    }, [])

  // show navbar function-
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  // local storage-
  let userDetails = JSON.parse(localStorage.getItem("user"));

    return (
      <div style={{paddingBottom:"4rem"}}>
        <div className="wrapper">
          <header>
            <img id="logo" src={logo} alt="logo" />
            <input type="text" placeholder="Search your best food" />
            <nav ref={navRef} id="nav">
              <NavLink to="/" onClick={showNavbar} >Home</NavLink>
              <NavLink to="/shopping" onClick={showNavbar} >Shopping</NavLink>
              <NavLink to="/cart" onClick={showNavbar} >Cart ({(cart.getItems !== undefined) && cart.getItems.length || 0})</NavLink>
              {
                (userDetails !== null) ? (
                  <span><AccountMenu closeNav = {showNavbar} /></span>
                ) : (
                  <NavLink to="/signup" onClick={showNavbar} >Account</NavLink>
                )
              }
              <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
              </button>
            </nav>
            <button
              className="nav-btn"
              onClick={showNavbar}>
              <FaBars />
            </button>
          </header>
        </div>
      </div>
    )
}

export default Navbar
