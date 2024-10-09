import React from 'react'
import { Assests } from '../Assests/Assests'
import NewsLetter from '../Components/NewsLetter'

const Blog = () => {
  return (
    <div className='border-t-2 mb-20'>

      <div className='flex sm:flex-row flex-col sm:min-h-[60vh] mb-10'>
        <img src={Assests.Bloghero} alt="" className='sm:w-1/2 w-full object-cover' />
        <div className='bg-gray-100 w-full flex flex-col items-center justify-center gap-3 text-center px-4 py-10'>
          <p className='text-2xl font-semibold text-stone-700 font-serif'>WHAT'S IN A GARDEN SET?</p>
          <p className='text-sm  text-gray-700'>Maecenas sem eros, rutrum vitae risus eget, vulputate
            <br className='lg:block sm:hidden block' /> aliquam nisi. dolor sit amet consectetur adipiscing eli
            <br className='lg:block sm:hidden block' /> mattis sit phasellus mollis sit aliquam sit </p>
        </div>
      </div>

      <div className='lg:w-9/12 w-11/12 m-auto pt-4 mb-10 md:flex lg:gap-20 gap-8'>
        <div className='md:w-2/3 flex  gap-8'>

          {/* first part  */}
          <div className='flex flex-col gap-10 w-1/2'>
            <div className='flex flex-col gap-3 '>
              <img src={Assests.Blog1} alt="" />
              <div className='flex gap-4 text-xs font-medium'>
                <div className='flex items-center gap-1'>
                  <div className='w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center'>
                    <img src={Assests.Personicon} alt="" className='w-3 h-3' />
                  </div>
                  Brian Clark
                </div>
                <hr className='w-1/5 h-[1px] my-2 border-gray-300' />
                <p>Jan 24, 2024</p>
              </div>
              <p className='font-medium text-lg w-10/12'>How Can I Use Ceramic When I  Decorate?</p>
              <p className='text-xs text-gray-500 w-10/12'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
            </div>

            <div className='flex flex-col gap-3 '>
              <img src={Assests.Blog3} alt="" />
              <div className='flex gap-4 text-xs font-medium'>
                <div className='flex items-center gap-1'>
                  <div className='w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center'>
                    <img src={Assests.Personicon} alt="" className='w-3 h-3' />
                  </div>
                  Brian Clark
                </div>
                <hr className='w-1/5 h-[1px] my-2 border-gray-300' />
                <p>Jan 24, 2024</p>
              </div>
              <p className='font-medium text-lg w-10/12'>How to Style a Beautiful House?</p>
              <p className='text-xs text-gray-500 w-10/12'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam .Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus</p>
            </div>

            <div className='flex flex-col gap-3 '>
              <img src={Assests.Blog5} alt="" />
              <div className='flex gap-4 text-xs font-medium'>
                <div className='flex items-center gap-1'>
                  <div className='w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center'>
                    <img src={Assests.Personicon} alt="" className='w-3 h-3' />
                  </div>
                  Brian Clark
                </div>
                <hr className='w-1/5 h-[1px] my-2 border-gray-300' />
                <p>Jan 24, 2024</p>
              </div>
              <p className='font-medium text-lg w-10/12'>Chocolate Clementine Cake Recipe</p>
              <p className='text-xs text-gray-500 w-10/12'> Vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus</p>
            </div>
          </div>

          {/* second part  */}
          <div className='flex flex-col gap-10 w-1/2'>
            <div className='flex flex-col gap-3 '>
              <img src={Assests.Blog2} alt="" />
              <div className='flex gap-4 text-xs font-medium'>
                <div className='flex items-center gap-1'>
                  <div className='w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center'>
                    <img src={Assests.Personicon} alt="" className='w-3 h-3' />
                  </div>
                  Brian Clark
                </div>
                <hr className='w-1/5 h-[1px] my-2 border-gray-300' />
                <p>Jan 24, 2024</p>
              </div>
              <p className='font-medium text-lg '>The secrets to a Living Room set?</p>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis</p>
            </div>

            <div className='flex flex-col gap-3 '>
              <img src={Assests.Blog4} alt="" />
              <div className='flex gap-4 text-xs font-medium'>
                <div className='flex items-center gap-1'>
                  <div className='w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center'>
                    <img src={Assests.Personicon} alt="" className='w-3 h-3' />
                  </div>
                  Brian Clark
                </div>
                <hr className='w-1/5 h-[1px] my-2 border-gray-300' />
                <p>Jan 24, 2024</p>
              </div>
              <p className='font-medium text-lg w-10/12'>The secrets to a Living Room set?</p>
              <p className='text-xs text-gray-500 w-10/12'>Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
            </div>

            <div className='flex flex-col gap-3 '>
              <img src={Assests.Blog6} alt="" />
              <div className='flex gap-4 text-xs font-medium'>
                <div className='flex items-center gap-1'>
                  <div className='w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center'>
                    <img src={Assests.Personicon} alt="" className='w-3 h-3' />
                  </div>
                  Brian Clark
                </div>
                <hr className='w-1/5 h-[1px] my-2 border-gray-300' />
                <p>Jan 24, 2024</p>
              </div>
              <p className='font-medium text-lg w-10/12'>Holiday Food Traditions With Moon Family</p>
              <p className='text-xs text-gray-500 w-10/12'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam </p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col gap-8 md:mt-0 mt-14'>
            <p className='text-xl text-gray-700 font-medium'>POPULAR POSTS</p>
            <div className='flex gap-5 items-center'>
              <img src={Assests.Bloghero} alt="" className='w-32' />
              <p className='text-sm text-gray-500 font-medium'>What's in a graden set?</p>
            </div>
            <div className='flex gap-5 items-center'>
              <img src={Assests.Blog1} alt="" className='w-32' />
              <p className='text-sm text-gray-500 font-medium'>How Can I Use Ceramic When I Decorate?</p>
            </div>
            <div className='flex gap-5 items-center'>
              <img src={Assests.Blog2} alt="" className='w-32' />
              <p className='text-sm text-gray-500 font-medium'>The secrets to a Living Room set?</p>
            </div>
          </div>
          <div className='flex flex-col my-14 gap-4'>
            <p className='text-xl text-gray-700 font-medium '>CATEGORIES</p>
            <p className='text-xs text-gray-700 font-medium'>DinnerWare</p>
            <p className='text-xs text-gray-700 font-medium'>Ceramic</p>
            <p className='text-xs text-gray-700 font-medium'>Traditional</p>
            <p className='text-xs text-gray-700 font-medium'>DecorArt</p>
            <p className='text-xs text-gray-700 font-medium'>GiftSets</p>

          </div>
        </div>

      </div>
      <div className='mt-20'>
        <NewsLetter />
      </div>

    </div>


  )
}

export default Blog
