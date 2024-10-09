import React, { useContext, useEffect, useState } from 'react';
import Title from '../Components/Title';
import { ShopContext } from '../Context/ShopContext';
import { BackendUrl } from '../App';
import axios from 'axios';
import { Assests } from '../Assests/Assests';

const Orders = () => {
    const { token, Currency } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null;
            }
            const response = await axios.post(
                `${BackendUrl}/api/order/userorders`,
                {},
                { headers: { token } }
            );
            if (response.data.success) {
                setOrderData(response.data.orders || []);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadOrderData();
    }, [token]);

    return (
        <div className='border-t pt-8 lg:w-9/12 w-11/12 m-auto mb-20 min-h-[80vh]'>
            <div>
                <Title text={'My Orders'} />
            </div>

            {orderData.length > 0 ? (
                <div className="space-y-10 ">
                    {orderData.map((order, index) => (
                        <div key={index} className="border border-gray-400  p-10 rounded-lg bg-gray-700 text-stone-100 ">
                            <div className='flex justify-between'>
                                <p className='text-xl mb-4 font-serif font-medium text-gray-100'>Order Details</p>
                                <div className='bg-green-600 rounded-full w-6 h-6 flex justify-center items-center '>
                                    <img src={Assests.Check} className='w-4 ' alt="" />
                                </div>
                            </div>
                            <div className='lg:flex gap-20'>
                                <div className="mb-2">
                                    <div className=' font-medium my-2 flex gap-2 text-gray-200'>
                                        <p className='text-gray-100'>Order Status: </p>
                                        {order.status}</div>
                                    <div className=' font-medium my-2 flex gap-2 text-gray-200'>
                                        <p className='text-gray-100'>Payment Method: </p>
                                        {order.paymentMethod}</div>
                                    <div className=' font-medium my-2 flex gap-2 text-gray-200'>
                                        <p className='text-gray-100'>Payment Status:</p>
                                        {order.payment ? 'Paid' : 'Not Paid'}</div>
                                    <div className=' font-medium my-2 flex gap-2 text-gray-200' >
                                        <p className='text-gray-100'>Order Date: </p>
                                        {new Date(order.date).toLocaleString()}</div>
                                    <div className='flex gap-2'>
                                    <p className='text-gray-100'>Total Amount: </p>
                                    <div>{order.amount}</div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <p className="font-medium my-2 text-white">Shipping Address:</p>
                                    <div className=' font-medium my-2 text-gray-200'>{order.address.street}</div>
                                    <div className=' font-medium my-2 text-gray-200'>{order.address.city},  {order.address.zipcode}</div>
                                </div>
                                <div>
                                    <h3 className=" text-xl font-medium font-serif text-white mb-3">Orderd Items:</h3>
                                    <ol className="list-decimal ml-5 ">
                                        {order.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="items-center mb-4">
                                                <div>
                                                    <p className="font-semibold">{item.name}</p>
                                                    <p className="text-xs font-medium">Quantity: {item.quantity}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default Orders;
