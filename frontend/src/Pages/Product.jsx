import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { Assests } from '../Assests/Assests';
import RelatedProducts from '../Components/RelatedProducts';
import NewsLetter from '../Components/NewsLetter';

const Product = () => {
  const { ProductId } = useParams();
  const { Products, Currency, AddToCart, RemoveFromCart } = useContext(ShopContext);
  const [ProductData, setProductData] = useState(false);
  const [image, setimage] = useState('');

  const FetchProductData = async () => {
    Products.map((item) => {
      if (item._id === ProductId) {
        setProductData(item);
        setimage(item.image[0])
        return null;
      }

    })
  }

  useEffect(() => {
    FetchProductData();

  }, [ProductId])

  return ProductData ? (
    <div className='lg:w-10/12 w-11/12 m-auto pt-10 mb-10 border-t'>

      {/* product data  */}
      <div className='flex sm:flex-row  flex-col gap-10 items-start'>

        {/* product image  */}
        <div className='flex sm:flex-col flex-row-reverse  justify-start border'>
          <div className='sm:w-96 sm:h-auto h-96 '>
            <img src={image} className='object-cover sm:w-96 sm:h-auto h-96' alt="" />
          </div>
          <div className='flex sm:w-96 sm:h-auto h-96 overflow-auto sm:flex-row flex-col'>
            {
              ProductData.image.map((item, index) => (
                <img onClick={() => setimage(item)} src={item} className='w-40 h-32 object-cover border' key={index} alt="" />
              ))
            }
          </div>
        </div>

        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl text-stone-700'>{ProductData.name} </h1>
          <div className='flex items-center gap-1 mt-2 '>
            <img src={Assests.Star} alt="" className='w-3 h-3' />
            <img src={Assests.Star} alt="" className='w-3 h-3' />
            <img src={Assests.Star} alt="" className='w-3 h-3' />
            <img src={Assests.Star} alt="" className='w-3 h-3' />
            <img src={Assests.Blurstar} alt="" className='w-3 h-3' />
            <p className='pl-2'>(1256 reviews)</p>
          </div>
          <p className='mt-2 text-2xl font-medium'>{Currency}{ProductData.prize}</p>
          <p className='mt-2 text-gray-500 '>{ProductData.description}</p>
          <div className='flex  gap-2 my-4'>
            <p className='font-medium text-sm'>Color : </p>
            <p className='font-medium text-sm text-stone-600'> {ProductData.Color}</p>
          </div>
          <div className=' my-4 '>
            <button onClick={() => AddToCart(ProductData._id)} className='bg-stone-700 text-white w-2/5 py-2 text-sm active:bg-stone-500 '>ADD TO CART</button>
          </div>
          <div>
            <p className='text-sm font-medium text-stone-600'>Share this:</p>
            <div className='flex gap-3 my-3 items-center '>
              <img src={Assests.Facebook} alt="facebbook" className='w-4 h-4' />
              <img src={Assests.Twitter} alt="twitter" className='w-4 h-4' />
              <img src={Assests.Instagram} alt="Instagram" className='w-4 h-4 ' />
              <img src={Assests.Linkedin} alt="Linkedin" className='w-4 h-4' />

            </div>
          </div>
          <hr className='my-5 w-4/5' />
          <div className='flex flex-col gap-2 mt-5 text-sm text-stone-600'>
            <p>100% original product.</p>
            <p>Cash on delivery is available.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>

        </div>
      </div>
      <RelatedProducts Category={ProductData.Category} />
      <NewsLetter />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
