import React from 'react'
import { Link } from 'react-router-dom';
import EditAddress from './editAddress';

const Address = ({singleUserDetail}) => {
  const {userDetails} = singleUserDetail;

  return (
    <div id='address'>
        <h3>Shipping Address</h3>
        <div>
            <p>Name - {(userDetails !== undefined) && userDetails.name || "name"}</p>
            <p>Email - {(userDetails !== undefined) && userDetails.email || "email"}</p>
            <p>Mobile - {(userDetails !== undefined && userDetails.address !== undefined) && userDetails.address.mobileNumber || "Mobile Number"}</p>
            <p>Whatsapp - {(userDetails !== undefined && userDetails.address !== undefined) && userDetails.address.whatsappNumber || "Whatsapp Number"}</p>
            <p>Address - {(userDetails !== undefined && userDetails.address !== undefined) && userDetails.address.homeAddress || "Home Address"}, {(userDetails !== undefined && userDetails.address !== undefined) && userDetails.address.pinCode || "Pincode"}</p>
            <p>{(userDetails !== undefined && userDetails.address !== undefined) && userDetails.address.city || "City"}, {(userDetails !== undefined && userDetails.address !== undefined) && userDetails.address.state || "State"}, {(userDetails !== undefined && userDetails.address !== undefined) && userDetails.address.country || "Country"}</p>
        </div>
        <EditAddress/>
    </div>
  )
}

export default Address
