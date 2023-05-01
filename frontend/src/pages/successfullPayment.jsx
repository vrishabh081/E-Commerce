import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const SuccessfullPayment = () => {
    return (
        <>
            <Stack sx={{ width: '100%' }} spacing={2} id="successfull-payment">
                <Alert variant="filled" severity="success">
                    Thank you for the order. Your order has been received. We will get back to you soon !
                </Alert>
            </Stack>
            <div id='successfull-order-last-section'>
                <Link to={"/shopping"}>Go for shopping {">"}</Link>
                <Link to={"/my-orders"}>Check your order {">"}</Link>
            </div>
        </>
    )
}

export default SuccessfullPayment;