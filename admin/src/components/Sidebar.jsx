import React from 'react'
import {NavLink} from 'react-router-dom'
import { assests } from '../assets/Assests'

const Sidebar = () => {
  return (
    <div className='min-w-[18%] min-h-screen bg-slate-100'>
      <div className='flex flex-col gap-3 pt-6 px-5 text-[15px]'>
        
        <NavLink className='flex items-center gap-3  sm:px-3 py-2 md:hover:bg-white md:hover:shadow duration-300 rounded-xl text-gray-600 hover:text-gray-900 hover:font-medium transition-colors' to="/Add">
            <img className='w-5 ' src={assests.Plus} alt="" />
            <p className='hidden md:block '>Add Items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3  sm:px-3 py-2 md:hover:bg-white md:hover:shadow duration-300 rounded-xl text-gray-600 hover:text-gray-900 hover:font-medium transition-colors' to="/list">
            <img className='w-5 ' src={assests.List} alt="" />
            <p className='hidden md:block '>List Items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3  sm:px-3 py-2 md:hover:bg-white md:hover:shadow duration-300 rounded-xl text-gray-600 hover:text-gray-900 hover:font-medium transition-colors' to="/Orders">
            <img className='w-5' src={assests.Orders} alt="" />
            <p className='hidden md:block '>Orders</p>
        </NavLink>

                
        

        

      </div>
    </div>
  )
}

export default Sidebar
