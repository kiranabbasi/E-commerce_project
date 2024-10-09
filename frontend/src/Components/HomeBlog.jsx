import React from 'react'
import { Link } from 'react-router-dom'
import { Assests } from '../Assests/Assests'

const HomeBlog = () => {
    return (
        <div className='lg:w-10/12 w-11/12 m-auto my-16'>
            <Link to='./Blog'>
            <div className='py-5 text-center font-semibold text-2xl font-serif text-stone-800'>OUR BLOG</div>
                <div className='flex sm:flex-row flex-col-reverse '>
                    <div className='sm:w-1/2 bg-gray-200 flex flex-col items-center justify-center text-center gap-1 sm:p-0 p-8'>
                        <p className='text-stone-600 text-sm font-medium'>TABLEWARE</p>
                        <p className='font-serif text-lg font-semibold text-stone-800'>THE SECRETS TO A <br />  KITCHEN ROOM</p>
                        <p className='text-xs text-stone-700 p-2'>Lorem ipsum dolor sit amet consectetur adipiscing <br className='sm:block hidden'/> eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                        <button className='underline  text-xs font-medium'>READ MORE</button>
                    </div>
                    <img className='sm:w-1/2 h-72 object-cover' src={Assests.HomeBlog} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default HomeBlog
