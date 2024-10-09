import React from 'react'
import { Assests } from '../Assests/Assests'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
    return (
        <div className='lg:w-10/12 w-11/12 m-auto my-16'>
            <Link to='./About'>
            <div className='flex sm:flex-row flex-col'>
                <div className='sm:w-1/2 bg-gray-200 flex flex-col items-center justify-center text-center gap-1 sm:p-0 p-8'>
                    <p className='font-serif text-2xl text-stone-800'>Made in viet Nam <br />since 1450</p>
                    <p className='text-xs text-stone-700 p-2'>Lorem ipsum dolor sit amet consectetur adipiscing eli <br className='sm:block hidden' /> mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <button className='underline  text-xs font-medium'>LEARN MORE</button>
                </div>
                <img className='sm:w-1/2 h-64 object-cover object-top' src={Assests.HomeAbout1} alt="" />
            </div>
            <div className='flex sm:flex-row flex-col-reverse'>
                <img className='sm:w-1/2 h-64 object-cover object-top' src={Assests.HomeAbout2} alt="" />
                <div className='sm:w-1/2 bg-gray-200 flex flex-col items-center justify-center text-center gap-1 sm:p-0 p-8'>
                    <p className='font-serif text-2xl text-stone-800'>Our History</p>
                    <p className='text-xs text-stone-700 p-2' >Lorem ipsum dolor sit amet consectetur adipiscing eli <br  className='sm:block hidden'/> mattis sit phasellus mollis sit aliquam sit </p>
                    <button className='underline  text-xs font-medium'>LEARN MORE</button>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default HomeAbout
