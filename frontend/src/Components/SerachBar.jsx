import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Assests } from '../Assests/Assests';
import { useLocation } from 'react-router-dom';

const SerachBar = () => {

    const { Search, setSearch, ShowSearch, setShowSearch } = useContext(ShopContext);
    const [Visible,setVisible] = useState(false)
    const Location = useLocation();

    useEffect(() => {
      if(Location.pathname.includes('Shop') && ShowSearch){
        setVisible(true);
      }
      else{
        setVisible(false)
      }

    }, [Location]);
    


    return ShowSearch && Visible ? (
        <div className='border-t border-b  bg-gray-50 text-center lg:w-10/12 w-11/12 m-auto'>
            <div className='inline-flex items-center justify-center border bg-gray-200 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input value={Search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
                <img className='w-4 ' src={Assests.Search} alt="" />
            </div>
            <img onClick={() => setShowSearch(false)} className='inline w-4 cursor-pointer' src={Assests.Cancelicon} alt="" />

        </div>
    ) : null
}

export default SerachBar
