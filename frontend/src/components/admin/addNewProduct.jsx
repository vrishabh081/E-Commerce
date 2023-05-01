import React, { useRef, useState } from 'react'
import Bottombar from '../bottombar'
import "../../style/admin.css";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { addNewProductFun } from '../../redux/app/admin/action';

const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [productPic, setProductPic] = useState("");
    const [loading, setLoading] = useState(false);
    const form = useRef();

    // redux-
    const dispatch = useDispatch();

    // preview image-
    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src);
        };
    };

    // form submit-
    const submitHandler = (e)=>{
        e.preventDefault(e)

        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            setLoading(true);
            const data = new FormData();
            data.append("file", productPic);
            data.append("upload_preset", "SR-Gurukul-Academy");
            data.append("cloud_name", "rishabhcloudinary")
            axios
            .post("https://api.cloudinary.com/v1_1/rishabhcloudinary/image/upload", data)
            .then(res=>{
                setLoading(false);

                if(res.data.url)
                {
                    // payload-
                    let payload = {
                        name,
                        price,
                        category,
                        productPic: res.data.url,
                    }
                    // add all details of a product-
                    dispatch(addNewProductFun(payload, user)).then(()=>{
                        form.current.reset();
                    })
                }
            })
            .catch(err=>console.log(err))
        }
    }


    return (
        <>
            <div id='admin-add-product'>
                <h1>New Product</h1>
                <form onSubmit={submitHandler} ref={form}>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="tel" placeholder='Price' onChange={(e)=>setPrice(e.target.value)}required />
                    </div>
                    <div>
                        <label>Category</label>
                        <select onChange={(e)=>setCategory(e.target.value)} required>
                            <option value="">Select</option>
                            <option value="Paneer">Paneer</option>
                            <option value="Rice">Rice</option>
                            <option value="Dosa">Dosa</option>
                            <option value="Daal">Daal</option>
                            <option value="Roti">Roti</option>
                        </select>
                    </div>
                    <div>
                        <input type="file" accept="image/*" onChange={(e)=> {loadfile(e); setProductPic(e.target.files[0])}} required />
                        <img src={""} id="output" alt="" />
                    </div>
                    <input type="submit" value={loading === true ? "..wait" : "Submit"} style={{width:"100%", margin:"1rem 0", cursor:'pointer'}} />
                </form>
            
            </div>
            <Bottombar/>
        </>
    )
}

export default AddNewProduct
