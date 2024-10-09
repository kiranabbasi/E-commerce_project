import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductCard = ({id,image,name,prize,description}) => {
  const {Currency, AddToCart}  = useContext(ShopContext);


  return (
      <div className='overflow-hidden '>
        <Link className='text-gray cursor-pointer' to={`/Product/${id}`}>
        <img className='hover:scale-110 transition duration-300 ease-in-out xl:w-60 lg:w-56 md:w-52 w-48 xl:h-72 lg:h-64 md:h-60 h-56 object-cover ' src={image[0]} alt="" />
        <p className='pt-3 pb-1 text-sm font-medium text-stone-700 md:w-48 w-32'>{name}</p>
        <p className='text-sm font-medium text-stone-700'>{Currency}{prize}</p>
        <p className='font-extralight text-sm text-gray-500 xl:w-60 lg:w-56 md:w-52 w-48'>{description}</p>
        </Link>
        <button onClick={()=> AddToCart(id)} className='bg-stone-700 text-white xl:w-60 lg:w-56 md:w-52 w-48 my-5 py-2 text-sm active:bg-stone-600 '>ADD TO CART</button>
        

      </div>
  )
}

export default ProductCard 
