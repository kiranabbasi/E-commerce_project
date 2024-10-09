import React from 'react'
import { Assests } from '../Assests/Assests'
import Title from '../Components/Title.jsx'
import NewsLetter from '../Components/NewsLetter'

const About = () => {
  return (
    <div className="lg:w-9/12 w-11/12 m-auto pt-4 mb-10 border-t">
      <div className='text-center mb-10'>
        <Title text={'ABOUT MOON'} />
        <p className='text-sm'>Moon's handmade ceramic products have been around <br /> since 1650, let's explore our journey</p >
        
        
      </div>
      <div className='flex sm:flex-row flex-col'>
        <div className='sm:w-1/2 bg-gray-200 flex flex-col items-center justify-center text-center gap-1 sm:p-0 p-8'>
          <p className='font-serif text-2xl text-stone-800'>1910</p>
          <p className='text-xs text-stone-700 p-2'>Lorem ipsum dolor sit amet consectetur adipiscing eli <br className='sm:block hidden' /> mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
        </div>
        <img className='sm:w-1/2 h-64 object-cover object-top' src={Assests.Aboutimg1} alt="" />
      </div>
      <div className='flex sm:flex-row flex-col-reverse'>
        <img className='sm:w-1/2 h-64 object-cover object-top' src={Assests.Aboutimg2} alt="" />
        <div className='sm:w-1/2 bg-gray-200 flex flex-col items-center justify-center text-center gap-1 sm:p-0 p-8'>
          <p className='font-serif text-2xl text-stone-800'>1990</p>
          <p className='text-xs text-stone-700 p-2' >Lorem ipsum dolor sit amet consectetur adipiscing eli <br className='sm:block hidden' /> mattis sit phasellus mollis sit aliquam sit </p>

        </div>
      </div>
      <div className='flex sm:flex-row flex-col'>
        <div className='sm:w-1/2 bg-gray-200 flex flex-col items-center justify-center text-center gap-1 sm:p-0 p-8'>
          <p className='font-serif text-2xl text-stone-800'>2010</p>
          <p className='text-xs text-stone-700 p-2'>Lorem ipsum dolor sit amet consectetur adipiscing eli <br className='sm:block hidden' /> mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
        </div>
        <img className='sm:w-1/2 h-64 object-cover object-top' src={Assests.Aboutimg3} alt="" />
      </div>
      <div className='my-16 flex sm:flex-row flex-col gap-10 '>
        <img className='sm:w-2/5 h-80 object-cover object-bottom' src={Assests.Aboutimg4} alt="" />
        <div className='my-6  flex flex-col gap-2 '>
          <p className='text-xl font-serif font-semibold'>HOW WE WORKS</p>
          <p className='text-base font-medium'>Product design</p>
          <p className='text-sm text-stone-600'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.</p>
          <p className='text-base font-medium'>Crafted</p>
          <p className='text-sm text-stone-600'>Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
          <p className='text-base font-medium'>Sell product</p>
          <p className='text-sm text-stone-600'>Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
        </div>
      </div>
      <Title text={'MEET OUR TEEM'} />
      <div className='grid sm:grid-cols-4 grid-cols-2 gap-5 mb-10'>
        <img src={Assests.teamimg1} alt="" />
        <img src={Assests.teamimg2} alt="" />
        <img src={Assests.teamimg3} alt="" />
        <img src={Assests.teamimg4} alt="" />
      </div>
      <NewsLetter/>

      

    </div>
  )
}

export default About
