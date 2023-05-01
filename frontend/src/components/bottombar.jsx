import React from 'react'
import {AiOutlineHome} from "react-icons/ai";
import {IoRestaurantOutline} from "react-icons/io5";
import {BsCartCheck} from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi";
import {GrAddCircle} from "react-icons/gr";
import {BsBagCheck} from "react-icons/bs"
import "../style/navbar.css";
import {Link} from "react-router-dom";
import AccountMenu from './account';
import {FaUserCircle} from "react-icons/fa";

const Bottombar = () => {
    let x = JSON.parse(localStorage.getItem("user")) || "";

    return (
        <div id='bottom-bar'>
            <div>
                <Link to={"/"}><AiOutlineHome/></Link>
                <Link to={"/shopping"}><IoRestaurantOutline/></Link>
                {
                    x.userId !== undefined && x.userId.length > 6 ? (
                        <>
                            <Link to={"/order"}><BsBagCheck/></Link>
                        </>
                    ) : (
                        <>
                            <Link to={"/cart"}><BsCartCheck/></Link>
                        </>
                    )
                }
                
                {
                    x.userId !== undefined ? (
                        <AccountMenu/>
                    ) : (
                        <Link to={"/signup"}><FaUserCircle/></Link>
                    )
                }
            </div>
        </div>
    )
}

export default Bottombar
