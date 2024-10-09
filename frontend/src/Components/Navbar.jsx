import React, { useContext, useState } from 'react'
import { Assests } from '../Assests/Assests'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }

  return (
    <div className='flex md:justify-around justify-between md:px-0 sm:px-8 px-3 items-center py-5 font-medium '>
      <img onClick={() => setVisible(true)} src={Assests.Menu} className='w-5 cursor-pointer md:hidden' alt="menubar" />
      <div>
        <NavLink to='./'>
          <img src={Assests.Logo} className='w-36' alt="logo" />
        </NavLink>
      </div>
      <ul className='hidden md:flex gap-8 text-sm '>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p className='lg:text-[18px] text-gray-700'>Home</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/Shop' className='flex flex-col items-center gap-1'>
          <p className='lg:text-[18px] text-gray-700'>Shop</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p className='lg:text-[18px] text-gray-700'>About</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
          <p className='lg:text-[18px] text-gray-700'>Contact</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/Blog' className='flex flex-col items-center gap-1'>
          <p className='lg:text-[18px] text-gray-700'>Blog</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <NavLink to='/Shop'>
          <img onClick={() => setShowSearch(true)} className='w-5  cursor-pointer md:block hidden' src={Assests.Search} alt="search" />
        </NavLink>
        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} className='w-5  cursor-pointer md:block hidden' src={Assests.User} alt="Profile" />
          {/*user dropdown menu */}
          {
            token &&
            <div className='group-hover:block hidden absolute dropdown-menu -right-5 pt-4 z-50'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p onClick={() => navigate('/Orders')} className='cursor-pointer hover:text-black '>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black '>LogOut</p>
              </div>
            </div>
          }
        </div>

        <Link to='./Cart' className='relative'>
          <img className='w-5  cursor-pointer' src={Assests.Cart} alt="Cart" />
          <p className='absolute right-[-10px] bottom-[-6px] w-4 text-center leading-4 bg-black text-white  aspect-square rounded-full text-[8px]'>{getCartCount()} </p>
        </Link>

      </div>

      {/* sidebar menu  */}
      <div className={`absolute top-0 left-0  bottom-0 overflow-hidden z-20  bg-gray-100  transition-all ${visible ? 'sm:w-3/5 w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-800 '>
          <div onClick={() => setVisible(false)} className='flex cursor-pointer p-7'>
            <img src={Assests.Cancelicon} alt="cancel" />
          </div>
          <NavLink to='/' className={(e) => e.isActive ? 'text-[#b9846b] ' : ''} onClick={() => setVisible(false)} >
            <p className='py-2 pl-6   hover:bg-white'>Home</p>
          </NavLink>
          <NavLink to='./Shop' className={(e) => e.isActive ? 'text-[#b9846b] ' : ''} onClick={() => { setVisible(false); setShowSearch(true) }}>
              <p className='py-2 pl-6  hover:bg-white '>Search</p>
          </NavLink>
          <NavLink to='/Shop' className={(e) => e.isActive ? 'text-[#b9846b] ' : ''} onClick={() => setVisible(false)} >
            <p className='py-2 pl-6  hover:bg-white '>Shop</p>
          </NavLink>
          <NavLink to='/About' className={(e) => e.isActive ? 'text-[#b9846b] ' : ''} onClick={() => setVisible(false)} >
            <p className='py-2 pl-6  hover:bg-white'>About</p>
          </NavLink>
          <NavLink to='/Contact' className={(e) => e.isActive ? 'text-[#b9846b] ' : ''} onClick={() => setVisible(false)} >
            <p className='py-2 pl-6  hover:bg-white' >Contact</p>
          </NavLink>
          <NavLink to='/Blog' className={(e) => e.isActive ? 'text-[#b9846b] ' : ''} onClick={() => setVisible(false)} >
            <p className='py-2 pl-6  hover:bg-white'>Blog</p>
          </NavLink>
          <p onClick={() => navigate('/Orders')} className='cursor-pointer hover:text-black py-2 pl-6 hover:bg-white'>Orders</p>
          <p onClick={logout} className='cursor-pointer hover:text-black py-2 pl-6 hover:bg-white'>LogOut</p>


        </div>
      </div>
    </div>
  )
}

export default Navbar
