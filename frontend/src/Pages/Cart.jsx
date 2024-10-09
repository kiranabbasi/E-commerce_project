import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Assests } from '../Assests/Assests';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const { Products, Currency, CartItems, getCartCount, AddToCart, RemoveFromCart, UpdateQuantity, navigate } = useContext(ShopContext);
  const [CartData, setCartData] = useState([]);

  useEffect(() => {
    if (Products.length > 0) {
      const TempData = [];
      for (const items in CartItems) {
        if (CartItems[items] > 0) {
          TempData.push({
            _id: items,
            quantity: CartItems[items],
          });
        }
      }
      setCartData(TempData);
    }
  }, [CartItems, Products]);

  return (
    <div className="lg:w-9/12 w-11/12 m-auto pt-4 min-h-[90vh] border-t">
      <div>
        <p className="text-2xl font-medium my-5">
          Cart ({getCartCount()} items)
        </p>
      </div>
      <div>
        {CartData.map((item) => {
          const ProductData = Products.find((product) => product._id === item._id);

          // Defensive check: if ProductData is not found, skip rendering
          if (!ProductData) return null;

          return (
            <div key={item._id} className="">
              <div className="items-center md:gap-8 gap-4 sm:flex justify-between hidden py-4 border-t border-b sm:border-b-inherit border-b-stone-700 text-gray-700">
                <div className="flex items-center gap-5">
                  <img
                    onClick={() => UpdateQuantity(item._id, 0)}
                    src={Assests.Cancelicon}
                    className="w-5 cursor-pointer"
                    title="delete"
                    alt="Cancel"
                  />
                </div>
                <div>
                  <img src={ProductData.image} className="w-20" alt="Product" />
                </div>
                <div>
                  <p className="text-lg font-medium md:w-40 lg:w-48 sm:w-28">
                    {ProductData.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-lg font-medium w-20">
                    {Currency}
                    {ProductData.prize} {/* Make sure this field exists */}
                  </p>
                </div>

                <div className="flex gap-6 items-center justify-center border border-stone-400 px-2 w-28">
                  <button
                    onClick={() => RemoveFromCart(item._id)}
                    className="text-gray-400 text-3xl"
                  >
                    -
                  </button>
                  <p className="font-medium">{item.quantity}</p>
                  <button
                    onClick={() => AddToCart(item._id)}
                    className="text-gray-500 text-2xl"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="text-stone-500 md:w-32 w-20 font-medium">
                    Subtotal: {Currency}
                    {ProductData.prize * item.quantity}
                  </p>
                </div>
              </div>
              {/* Mobile view */}
              <div className="sm:hidden flex flex-col gap-2 p-5 border-b border-b-stone-800">
                <img
                  onClick={() => UpdateQuantity(item._id, 0)}
                  src={Assests.Cancelicon}
                  className="w-3 mx-2"
                  alt="Cancel"
                />
                <div className="flex items-center gap-4">
                  <img
                    src={Array.isArray(ProductData.image) ? ProductData.image[0] : ProductData.image}
                    className="w-20"
                    alt="Product"
                  />
                  <p className="text-lg font-medium">{ProductData.name}</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className="text-gray-500 text-sm">Price:</p>
                  <p className="font-medium">
                    {Currency}
                    {ProductData.prize}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">Quantity:</p>
                  <div className="flex gap-4 items-center justify-center border border-stone-400 px-2 w-20">
                    <button
                      onClick={() => RemoveFromCart(item._id)}
                      className="text-gray-400 text-3xl"
                    >
                      -
                    </button>
                    <p className="font-medium">{item.quantity}</p>
                    <button
                      onClick={() => AddToCart(item._id)}
                      className="text-gray-500 text-2xl"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between my-2">
                  <p className="text-gray-500 text-sm">SUBTOTAL:</p>
                  <p className="font-medium">
                    {Currency}
                    {ProductData.prize * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px] bg-stone-800 p-7">
          <CartTotal />
          <div className="mt-3">
            <button
              onClick={() => navigate('/PlaceOrder')}
              className="w-full border border-stone-400 bg-stone-800 text-slate-300 py-2 text-xs"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
