import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      console.log('No token found');
      return;
    }

    try {
      const response = await axios.post(
        `${BackendUrl}/api/order/listorders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setOrders(response.data.orders || []);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${BackendUrl}/api/order/status`,
        {orderId, status:event.target.value },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if(response.data.success){
        await fetchAllOrders();
        console.log('order updated successfully')
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error(response.data.message || 'error updating the status')
    }
  }

  useEffect(() => {
    if (token) {
      fetchAllOrders();
    }
  }, [token]);

  return (
    <div className=" ">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <ul className=" space-y-10">
          {orders.map((order) => (
            <li key={order._id} className=" p-4 rounded-md  bg-gray-800 text-white shadow-lg md:flex gap-10">
              <div className=''>
                <p className="text-lg font-semibold">
                  Order ID: <span className="font-normal">{order._id}</span>
                </p>
                <div className="mt-1 flex gap-2">
                  <div className="font-medium">Name:</div>
                  <p className="text-gray-200">{order.address.firstName} {order.address.lastName}</p>
                </div>
                <div className="mt-1">
                  <div className="font-medium">Address:</div>
                  <p className="text-gray-200">{order.address.street}, {order.address.country}</p>
                </div>
                <div className="">
                  <div className="font-medium">Payment Method:</div>
                  <p className="text-gray-200">{order.paymentMethod}</p>
                </div>
              </div>
              <div className="">
                <div className="font-semibold text-lg">Items Ordered:</div>
                <ul className="list-disc ml-6 mt-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-200">
                      {item.quantity}x {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <div className='flex gap-5 mb-3'>
                  <p className="font-medium">Status:</p>
                  <select onChange={(event)=> statusHandler(event, order._id)} value={order.status} className='p-1 font-semibold text-black rounded'>
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out For Delivery">Out For Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
                <div>
                  <p className="font-medium">Amount:</p>
                  <p className="text-gray-200">{order.amount}</p>
                </div>
                <div className='flex gap-1'>
                  <p className="font-medium">Payment:</p>
                  <p className="text-gray-200">{order.payment ? 'Done' : 'Pending'}</p>
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
