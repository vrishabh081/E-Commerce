import { useRef, useState } from 'react';
import {FiEdit} from "react-icons/fi";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import { getProfileFun, setAddressFun } from '../../redux/auth/action';

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

const EditAddress = ({el}) => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const form = useRef();
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const data = useSelector((store)=>store.authReducer);
    const {isLoading} = data;

    // form submit-
    const updateHandler = (e)=>{
        e.preventDefault()
        let user = JSON.parse(localStorage.getItem("user")) || "";
        user = user.email;

        if(user !== undefined){
            let payload = {
                mobileNumber,
                whatsappNumber,
                country,
                state,
                city,
                pinCode,
                homeAddress
            }
            dispatch(setAddressFun(payload, user)).then(()=>{
                dispatch(getProfileFun(user));
                form.current.reset();
                toast.success("Successfully updated");
                setOpen(false)
            })
        }
    }


    return (
        <>
            <Button className='main-btn' onClick={handleOpen} style={{backgroundColor:"#fff", color:"#007332"}}><FiEdit/></Button>
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
                        <h1>New Address</h1>
                        <form onSubmit={updateHandler} ref={form}>
                            <div>
                                <label>Mobile Number</label>
                                <input type="tel" placeholder='+1 1234567890' onChange={(e)=>setMobileNumber(e.target.value)} required />
                            </div>
                            <div>
                                <label>Whatsapp Number</label>
                                <input type="tel" placeholder='+1 1234567890' onChange={(e)=>setWhatsappNumber(e.target.value)} />
                            </div>
                            <div>
                                <label>Permanant Address</label>
                                <input type="text" placeholder='New colony' onChange={(e)=>setHomeAddress(e.target.value)} required />
                            </div>
                            <div>
                                <label>Pincode</label>
                                <input type="tel" placeholder='20810' onChange={(e)=>setPinCode(e.target.value)} required />
                            </div>
                            <div>
                                <label>City</label>
                                <input type="text" placeholder='Kanpur' onChange={(e)=>setCity(e.target.value)} required />
                            </div>
                            <div>
                                <label>State</label>
                                <input type="text" placeholder='Uttar Pradesh' onChange={(e)=>setState(e.target.value)} required />
                            </div>
                            <div>
                                <label>Country</label>
                                <input type="text" placeholder='India' onChange={(e)=>setCountry(e.target.value)} required />
                            </div>
                            <input type="submit" onClose={isLoading === false ? handleClose : undefined} value={isLoading === true ? "..wait" : "Submit"} style={{width:"100%", margin:"1rem 0", cursor:'pointer'}} />
                        </form>
                    </div>
                </Box>
                </Fade>
            </Modal>
        </>
    );
}


export default EditAddress;