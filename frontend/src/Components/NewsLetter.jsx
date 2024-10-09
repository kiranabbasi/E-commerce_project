import React from 'react'

const NewsLetter = () => {
    const OnSubmitHandler = (event) =>{
        event.preventDefault();
    }


  return (
    <div className='flex flex-col items-center justify-center gap-3  my-5 text-center'>
        <p className='text-xs font-medium text-stone-700'>Sign Up for emails</p>
        <p className='sm:text-xl text-lg font-semibold text-stone-800 font-serif '>FOR NEWS, COLLECTIONS <br className='sm:hidden block'/> AND MORE </p>
        <form onSubmit={OnSubmitHandler} className='flex flex-col gap-2 justify-center items-center'>
        <input id='inputnewsletter' className='w-72 border-b border-stone-700 text-center placeholder:text-sm ring-offset-0 text-stone-700' type="email" placeholder='Enter your email address' />
        <button type='submit' className='border border-stone-700 px-3 py-1 w-20 text-xs text-stone-700 font-medium '>SIGN UP</button>
        </form>
    </div>
  )
}

export default NewsLetter
