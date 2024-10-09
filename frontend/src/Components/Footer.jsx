import React from 'react'
import { Assests } from '../Assests/Assests'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {

    const scrollY = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };
    
    return (
        <div className='bg-[#3A3845] w-full '>
            <div className=' xl:px-28 lg:px-20 px-5  md:flex '>
                <div className='lg:w-2/5 md:w-4/12 md:border-r border-b border-stone-300 text-white xl:px-14 lg:px-12 md:px-8 py-10 w-11/12 md:mx-0 mx-auto'>
                    <img className='w-32' src={Assests.FooterLogo} alt="" />
                    <p className='text-xs py-3 text-stone-200'>Lorem ipsum dolor sit amet consectetur <br className='lg:block md:hidden' /> adipiscing elit aliquam mauris sed ma</p>
                    <button className='border px-3 py-1 text-[12px] font-light flex items-center gap-1'>GET STARTED
                        <img src={Assests.Arrow} alt="" />
                    </button>
                </div>
                <div className='border-b border-stone-300 md:w-3/5 w-11/12 md:mx-0 mx-auto text-stone-400 xl:px-14 lg:px-12 md:px-5  py-8  sm:flex grid grid-cols-2 gap-y-5 justify-around'>
                    <div className='text-sm'>
                        <p className='text-sm text-stone-200 py-2 '>ABOUT US</p>
                        <p>Portfolio Project</p>
                        <p>React.js</p>
                        <p>TailWind CSS</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                    </div>
                    <div className='text-sm'>
                        <p className='text-sm text-stone-200 py-2 '>SERVICES</p>
                        <p>HTML, CSS</p>
                        <p>Java Script</p>
                        <p>React.js</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                    </div>
                    <div className='text-sm'>
                        <p className='text-sm text-stone-200 py-2 '>CONTACT</p>
                        <p>Gmail</p>
                        <p>WhatsApp</p>
                        <p>Github</p>
                    </div>
                    <div className='text-sm '>
                        <p className='text-sm text-stone-200 py-2 '>COMPANY</p>
                        <NavLink to='/' onClick={scrollY} className={(e) => e.isActive ? 'text-stone-200 ' : ''}  >
                            <p className=''>Home</p>
                        </NavLink>
                        <NavLink to='/Shop' onClick={scrollY} className={(e) => e.isActive ? 'text-stone-200 ' : ''}  >
                            <p className=''>Shop</p>
                        </NavLink>
                        <NavLink to='/About' onClick={scrollY} className={(e) => e.isActive ? 'text-stone-200 ' : ''}  >
                            <p className=''>About Us</p>
                        </NavLink>
                        <NavLink to='/Contact' onClick={scrollY} className={(e) => e.isActive ? 'text-stone-200 ' : ''}  >
                            <p className=''>Contact</p>
                        </NavLink>
                        <NavLink to='/Contact'  className={(e) => e.isActive ? 'text-stone-200 ' : ''}  >
                            <p className=' '>Privacy Policy</p>
                        </NavLink>
                    </div>
                </div>


            </div>
            <div className='flex sm:flex-row flex-col justify-center items-center text-xs gap-2 py-5'>
                <p className='text-gray-400'>Copyright © 2023 Moon</p>
                <p className='text-gray-400 sm:block hidden'> | </p>
                <p className='text-gray-400'> All Rights Reserved </p>
                <p className='text-gray-400 sm:block hidden'> | </p>
                <p className='text-gray-500 underline'>Terms and Conditions <span> | </span> Privacy Policy </p>
            </div>
        </div>
    )
}

export default Footer
