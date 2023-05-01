import React from 'react'
import {AiOutlineHome} from "react-icons/ai";
import {GrAddCircle} from "react-icons/gr";
import {BsCartCheck} from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi";
import "../style/navbar.css";
import {Link} from "react-router-dom";

const DashboardBottombar = () => {

    return (
        <div id='bottom-bar'>
            <div>
                <Link to={"/"}><AiOutlineHome/></Link>
                <Link to={"/add-new-product"}><GrAddCircle/></Link>
                <Link to={"/cart"}><BsCartCheck/></Link>
                <Link to={"/signup"}><BiUserCircle/></Link>
            </div>
        </div>
    )
}

export default DashboardBottombar
