import React, { useState } from 'react'
import { Assests } from '../Assests/Assests'
import { Form } from 'react-router-dom'

const Contact = () => {
  const [CurrentState, setCurrentState] = useState('SignUp')
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }


  return (
    <div className='relative'>
      <img src={Assests.Contacthero} className='w-full md:h-[70svh] h-64 object-cover object-center ' alt="" />
      <div className='md:absolute md:w-96 w-full md:h-[70svh] h-80 bg-gray-700 md:top-0  xl:left-40 lg:left-28 md:left-14 sm:left-8  flex flex-col items-center justify-center gap-5'>
        <img src={Assests.Heroicon} alt="logoicon" />
        <p className='text-white text-2xl font-serif text-center'>CONTACT US  </p>
        <div className='h-[1px] w-48 bg-stone-400'></div>
        <p className='text-xs text-white'>Follow us on social media  </p>
        <div>
          <div className='bg-yellow-100 w-7 h-7 rounded-full flex items-center justify-center ' title='Linkedin'>
            <img className='w-4 h-4' src={Assests.Linkedin} alt="" />
          </div>
        </div>

      </div>
      <div className='my-20 text-center flex flex-col gap-5 lg:w-10/12 w-11/12 mx-auto '>
        <div>
          <p className='text-3xl font-medium font-serif text-gray-700'>GET IN TOUCH WITH US </p>
          <p className='text-gray-700 text-xs'>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <br className='sm:block hidden' /> phasellus mollis sit aliquam sit nullam.
          </p>
        </div>
        <div>
          <p className='text-sm'>Office Hours :</p>
          <p className='text-yellow-800 text-xs'>Monday - Friday  8:00 am to 5:00 pm</p>
        </div>
        <div>
          <p className='text-sm'>Email:</p>
          <p className='text-yellow-800 text-xs'>contact@company.com</p>
        </div>
        <div>
          <p className='text-sm'>Phone :</p>
          <p className='text-yellow-800 text-xs'>(414) 687 - 5892</p>
        </div>
        <div>
          <p className='text-sm'>Location :</p>
          <p className='text-yellow-800 text-xs'>59 Middle Point Rd <br />
            San Francisco, 80412</p>
        </div>


      </div>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center md:w-1/2 sm:w-4/5 mx-auto mb-10 px-5 gap-5'>
        <div className='flex gap-5 w-full'>
          <div className='text-xs flex flex-col gap-1 w-full'>
            <p>Name</p>
            <input type="text" placeholder='Samantha Clarken' className='border border-stone-800 py-2 w-full px-2 text-xs' />
          </div>
          <div className='text-xs flex flex-col gap-1 w-full'>
            <p>Email</p>
            <input type="email" placeholder='example@gamil.com' className='border border-stone-800 py-2 w-full px-2 text-xs' />
          </div>
        </div>
        <div className='flex gap-5 w-full'>
          <div className='text-xs flex flex-col gap-1 w-full'>
            <p>Phone</p>
            <input type="number" placeholder='(123) 456 - 7890' className='border border-stone-800 py-2 w-full px-2 text-xs' />
          </div>
          <div className='text-xs flex flex-col gap-1 w-full'>
            <p>Company</p>
            <input type="text" placeholder='Moon' className='border border-stone-800 py-2 w-full px-2 text-xs' />
          </div>
        </div>
        <div className='text-xs flex flex-col gap-1 w-full'>
          <p>Message</p>
          <input type="text" placeholder='Type your message here...' className='border border-stone-800 py-2 w-full px-2 text-xs' />
        </div>
        <button type='submit' className='w-full bg-gray-800 py-2 text-center text-white text-xs flex  items-center justify-center gap-1 '>
          <p className='mb-1'>Send Message</p>
          <img src={Assests.Arrow} alt="" className='w-2 '/>
        </button>
      </form>


    </div>
  )
}

export default Contact

