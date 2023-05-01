import React, { useEffect } from 'react'
import "../style/profile.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProfileFun } from '../redux/auth/action';
import { Loader } from '../components/loader';

const Profile = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.authReducer);
    const {singleUserDetail} = data;

    const {userDetails} = singleUserDetail;

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            dispatch(getProfileFun(user))
        }
    }, [])

    return (
        <div id='profile'>
            <h1>Profile</h1>
            {
                userDetails !== undefined ? (
                    <div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div>
                            <p>Name - {userDetails.name}</p>
                            <p>Email - {userDetails.email}</p>
                            {userDetails.address !== undefined && (
                                <>
                                    <p>Mobile - {userDetails.address.mobileNumber || "Mobile Number"}</p>
                                    <p>Whatsapp - {userDetails.address.whatsappNumber || "Whatsapp Number"}</p>
                                    <p>Address - {userDetails.address.homeAddress || "Home Address"}, {userDetails.address.pinCode || "Pincode"}</p>
                                    <p>{userDetails.address.city || "City"}, {userDetails.address.state || "State"}, {userDetails.address.country || "Country"}</p>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <Loader/>
                )
            }
        </div>
    )
}

export default Profile
