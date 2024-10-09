import React, { useContext, useEffect, useCallback } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import { BackendUrl } from '../App';
import { toast } from "react-toastify";
import axios from 'axios';

const Verify = () => {
    const { navigate, token, clearCart } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = useCallback(async () => {  
        try {
            if (!token) {
                return null;
            }
            const response = await axios.post(BackendUrl + '/api/order/verifyStripe', { success, orderId }, { headers: { token } });

            if (response.data.success) {
                navigate('/Orders')
                clearCart();
                toast.success(response.data.message || 'Orders Placed Successfully');
            }
            else {
                navigate('/Cart')
            }
        } catch (error) {
            toast.error(error.message || 'Error placing the order via Stripe');
        }
    }, [token, success, orderId, navigate, clearCart]);
    useEffect(() => {
        verifyPayment();
    }, [verifyPayment]);

    return (
        <div className='min-h-[70vh] flex items-center justify-center  h-screen'>
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
    );
}

export default Verify;
