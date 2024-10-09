import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductCard from './ProductCard';

const BestSeller = () => {
    const {Products} = useContext(ShopContext);
    const [BestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const BestProduct = Products.filter((item) => (item.BestSeller));
        setBestSeller(BestProduct.slice(0, 8))
    }, [Products])

  return (
    <div className='lg:w-10/12 w-11/12 m-auto '>
      <div>
      <Title text={'BEST SELLERS'} />
      </div>
      <div className='grid xl:grid-cols-4  sm:grid-cols-3  grid-cols-2 gap-4 gap-y-6 '>
                {
                    BestSeller.map((item,index) =>(
                        <ProductCard key={index} id={item._id} image={item.image} name={item.name}
                        prize={item.prize} description={item.description}/>
                    ))
                }

            </div>
    </div>
  )
}

export default BestSeller
