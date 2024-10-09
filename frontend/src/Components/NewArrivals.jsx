import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductCard from './ProductCard';

const NewArrivals = () => {
    const { Products } = useContext(ShopContext);
    const [NewArrivals, setNewArrivals] = useState([]);

    useEffect(() => {
        setNewArrivals(Products.slice(0, 4))
    }, [Products])


    return (
        <div className='lg:w-10/12 w-11/12 m-auto '>
            <div>
                <Title text={'DISCOVER NEW ARRIVALS'} /></div>
            <div className='grid lg:grid-cols-4  sm:grid-cols-3  grid-cols-2 gap-4 gap-y-6 justify-between'>
                {
                    NewArrivals.map((item,index) =>(
                        <ProductCard key={index} id={item._id} image={item.image} name={item.name}
                        prize={item.prize} description={item.description}/>
                    ))
                }

            </div>


        </div>
    )
}

export default NewArrivals
