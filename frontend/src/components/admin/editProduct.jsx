import { useRef, useState } from 'react';
import {FiEdit} from "react-icons/fi";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteProductFunAdmin, getProductFunAdmin, updateProductFunAdmin } from '../../redux/app/admin/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "85%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
};

const EditProduct = ({el}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const form = useRef();
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const a = useSelector((store)=>store.adminReducer);
    const {isLoading} = a

    // preview image-
    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src);
        };
    };

    // form submit-
    const updateHandler = (e)=>{
        const _id = el._id
        e.preventDefault()

        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            let payload = {
                name : name || el.name,
                price : price || el.price,
                category : el.category,
                productPic: el.productPic,
            }
            dispatch(updateProductFunAdmin(payload, user, _id)).then(()=>{
                toast.success("successfully updated");
                dispatch(getProductFunAdmin(user))
            })
        }
    }


    return (
        <>
            <Button onClick={handleOpen} style={{backgroundColor:"#fff", color:"#007332"}}><FiEdit/></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <div id='admin-add-product'>
                        <h1>Update Product</h1>
                        <form onSubmit={updateHandler} ref={form}>
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder='Name' value={name || el.name} onChange={(e)=>setName(e.target.value)} required />
                            </div>
                            <div>
                                <label>Price</label>
                                <input type="tel" placeholder='Price' value={price || el.price} onChange={(e)=>setPrice(e.target.value)}required />
                            </div>
                            <div>
                                <label>Category</label>
                                <select onChange={(e)=>setCategory(e.target.value)} value={el.category} required>
                                    <option value="">Select</option>
                                    <option value="Paneer">Paneer</option>
                                    <option value="Rice">Rice</option>
                                    <option value="Dosa">Dosa</option>
                                    <option value="Daal">Daal</option>
                                    <option value="Roti">Roti</option>
                                </select>
                            </div>
                            <input type="submit" value={isLoading === true ? "..wait" : ("Submit")} style={{width:"100%", margin:"1rem 0", cursor:'pointer'}} />
                        </form>
                    </div>
                </Box>
                </Fade>
            </Modal>
        </>
    );
}


export default EditProduct;