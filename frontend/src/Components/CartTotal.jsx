import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


const CartTotal = () => {
    const { Currency, DeliveryFee, getCartAmount } = useContext(ShopContext)

    return (
        <div className='w-full  '>
            <div className='text-white  mb-4 text-lg '>
                <p>Cart Totals</p>
            </div>
            <div className='flex flex-col gap-2 test-xs  text-gray-200'>
                <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p>{Currency} {getCartAmount()}.00 </p>
                </div>
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{Currency} {DeliveryFee}.00 </p>
                </div>
                <div className='flex justify-between'>
                    <p>Cart Total</p>
                    <p>{Currency} {getCartAmount() === 0 ? 0 : getCartAmount() + DeliveryFee }.00 </p>
                </div>
                



            </div>
        </div>
    )
}

export default CartTotal
