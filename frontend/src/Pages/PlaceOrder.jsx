import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Assests } from '../Assests/Assests';
import { ShopContext } from '../Context/ShopContext';
import { BackendUrl } from '../App';
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { Currency, DeliveryFee, getCartAmount, CartItems, clearCart, Products, token, navigate, } = useContext(ShopContext);
  const [CartData, setCartData] = useState([]);
  const [method, setMethod] = useState('COD');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
    email: "",
    orderNotes: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = CartData.map(item => {
        const product = Products.find(product => product._id === item._id);
        return {
          _id: product._id,
          name: product.name,
          prize: product.prize,
          quantity: item.quantity
        };
      });


      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + DeliveryFee
      }

      switch (method) {
        // Api calls for cash on delivery
        case 'COD':
          if (Object.keys(CartItems).length > 0) {
            try {
              const response = await axios.post(BackendUrl + '/api/order/ordercod', orderData, { headers: { token } });

              if (response.data.success) {
                navigate('Orders');
                clearCart();
                toast.success(response.data.message || 'Orders Placed Successfully');
              } else {
                toast.error(response.data.message);
              }
            } catch (error) {
              console.error('Error placing order:', error);
              toast.error('Failed to place order. Please try again.');
            }
          } else {
            toast.error("No items in Cart");
          }
          break;
        case 'stripe':
          const responseStripe = await axios.post(BackendUrl + '/api/order/orderstripe', orderData, { headers: { token } });
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          }
          else {
            console.log(responseStripe.data.message)
          }

          break;

        default:
          break;
      }


    } catch (error) {
      console.error("Error processing order:", error);
    }
  };


  useEffect(() => {
    const TempData = [];
    for (const itemId in CartItems) {
      if (CartItems[itemId] > 0) {
        TempData.push({
          _id: itemId,
          quantity: CartItems[itemId]
        });
      }
    }
    setCartData(TempData);
  }, [CartItems]);

  return (
    <div className='flex sm:flex-row flex-col-reverse justify-between gap-10 pt-8 border-t lg:w-9/12 w-11/12 m-auto'>
      {/* left side */}
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <p className='text-lg font-medium text-stone-800 mb-5'>Billing Details</p>
        <div className='flex gap-5 sm:flex-row'>
          <div className='text-xs font-medium flex flex-col gap-2 w-full'>
            <p>First Name *</p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onChangeHandler}
              required
              placeholder='Samantha Clarken'
              className='border border-stone-800 py-2 px-2 w-full'
            />
          </div>
          <div className='text-xs font-medium flex flex-col gap-2 w-full'>
            <p>Last Name *</p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={onChangeHandler}
              placeholder='Clarken'
              required
              className='border border-stone-800 py-2 px-2 w-full'
            />
          </div>
        </div>
        <div className='flex gap-5 sm:flex-row'>
          <div className='text-xs font-medium flex flex-col gap-2 w-full'>
            <p>Country/Region *</p>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={onChangeHandler}
              placeholder='United States'
              required
              className='border border-stone-800 py-2 px-2 w-full'
            />
          </div>
          <div className='text-xs font-medium flex flex-col gap-2 w-full'>
            <p>Town/City *</p>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={onChangeHandler}
              placeholder='City'
              required
              className='border border-stone-800 py-2 px-2 w-full'
            />
          </div>
        </div>
        <div className='w-full text-xs font-medium flex flex-col gap-2 '>
          <p>Street address *</p>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={onChangeHandler}
            required
            className='border border-stone-800 py-2 px-2 w-full'
            placeholder='Address'
          />
        </div>
        <div className='flex gap-5 sm:flex-row'>
          <div className='text-xs font-medium flex flex-col gap-2 w-full'>
            <p>Zip Code</p>
            <input
              type="number"
              name="zipcode"
              value={formData.zipcode}
              onChange={onChangeHandler}
              placeholder='Zip Code'
              required
              className='border border-stone-800 py-2 px-2 w-full'
            />
          </div>
          <div className='text-xs font-medium flex flex-col gap-2 w-full'>
            <p>Phone *</p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChangeHandler}
              placeholder='(123) 456 - 7890'
              required
              className='border border-stone-800 py-2 px-2 w-full'
            />
          </div>
        </div>
        <div className='w-full text-xs font-medium flex flex-col gap-2 '>
          <p>Email *</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            required
            className='border border-stone-800 py-2 px-2 w-full'
            placeholder='example@yourgmail.com'
          />
        </div>
        <div className='text-xs font-medium flex flex-col gap-2 w-full'>
          <p>Order Notes</p>
          <input
            type='text'
            name="orderNotes"
            value={formData.orderNotes}
            onChange={onChangeHandler}
            placeholder='Type your message here...'
            className='border border-stone-800 py-2 px-2 w-full '
          />
        </div>
        <div>
          <div className='mt-5 mb-14 flex md:flex-row flex-col-reverse justify-between gap-3'>
            <Link to='/Cart'>
              <div className='flex gap-1 items-center '>
                <p className='font-medium text-lg rotate-180'>&gt;</p>
                <p className='text-xs font-medium mb-1'>RETURN TO CART</p>
              </div>
            </Link>
            <button type='submit' className='py-2 px-8 bg-gray-700 text-xs text-stone-100 flex items-center gap-2'>
              <p className='mb-1'>Continue to Shipping</p>
              <img src={Assests.Arrow} alt="" />
            </button>
          </div>
        </div>
      </form>
      {/* right side */}
      <div className='sm:max-w-[360px] w-full sm:mt-16 flex flex-col gap-5'>
      <h1 className='text-xl fonr-medium font-serif'>Bill</h1>
        <div className='w-full flex flex-col gap-2'>
          <div className='font-medium w-full flex justify-between'>
            <p>Subtotal:</p>
            <p>{Currency} {getCartAmount()}</p>
          </div>
          <div className='font-medium w-full flex justify-between'>
            <p>Shipping:</p>
            <p>{Currency} {DeliveryFee}</p>
          </div>
          <div className='font-medium w-full flex justify-between'>
            <p>Total:</p>
            <p>{Currency} {getCartAmount() + DeliveryFee}</p>
          </div>
        </div>
        <div className='w-full border-t py-5 flex flex-col gap-3'>
          
          <p className='text-lg font-medium text-stone-700'>Select Payment Method</p>
          <div className='flex gap-2 items-center'>
            <input type='radio' value='COD' checked={method === 'COD'} onChange={onMethodChange} />
            <p className='text-gray-600 hover:text-black font-medium'>Cash On Delivery</p>
          </div>
          <div className='flex gap-2 items-center'>
            <input type='radio' value='stripe' checked={method === 'stripe'} onChange={onMethodChange} />
            <p className='text-gray-600 hover:text-black font-medium'>stripe Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
