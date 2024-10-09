import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductCard from './ProductCard';

const RelatedProducts = ({Category}) => {

    const {Products} = useContext(ShopContext);
    const [Related, setRelated] = useState([]);

    useEffect(() => {
       if (Products.length > 0) {
        let ProductsCopy = Products.slice();
        ProductsCopy = ProductsCopy.filter((item) => Category === item.Category);
        
        setRelated(ProductsCopy.slice(0,4))
       }
    
      
    }, [Products])
    

  return (
    <div className='my-10'>
        <div className=''>
            <Title text={'SIMILIAR ITEMS'}/>
        </div>
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-8'>
            {Related.map((item,index)=>(
                <ProductCard key={index} id={item._id} image={item.image} name={item.name}
                prize={item.prize} description={item.description}/>
            ))}

        </div>
      
    </div>
  )
}

export default RelatedProducts
