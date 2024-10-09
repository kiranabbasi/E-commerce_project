import React from 'react'
import { assests } from '../assets/Assests'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
      <div className='w-[max(10%,80px] relative'>
      <img className='w-[max(10%,80px]' src={assests.Logo} alt="" />
      <p className=' text-xs font-semibold text-amber-800 absolute right-4 -bottom-2'>ADMIN PANEL</p>
      </div>
      <button onClick={()=> setToken('')} className='bg-gray-600 text-white px-5 sm:px-7 sm:py-2 py-2 rounded-full text-xs sm:text-sm'>Log Out</button>
    </div>
  )
}

export default Navbar
