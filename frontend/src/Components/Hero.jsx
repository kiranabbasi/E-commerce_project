import React from 'react'
import { Assests } from '../Assests/Assests'
import { Link , NavLink} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='relative z-10'>
            <img src={Assests.Heroimg} className='w-full md:h-[70svh] h-64 object-cover md:object-center  object-right' alt="" />
            <div className='md:absolute md:w-96 w-full md:h-[70svh] h-80 bg-[#826F66] md:top-0  xl:left-40 lg:left-28 md:left-14 sm:left-8  flex flex-col items-center justify-center gap-5'>
                <img src={Assests.Heroicon} alt="logoicon" />
                <p className='text-white font-extralight'>Handcrafted in Viet Nam since 1650</p>
                <div>
                    <p className='text-white text-3xl font-serif text-center'>BAT TRANG</p>
                    <p className='text-white text-3xl font-serif text-center'> DINNER SET</p>
                </div>
                <NavLink to="/shop" >
                <button className='w-40 p-1 bg-white text-sm'>SHOP NOW</button>
                </NavLink>
            </div>
            <div className='lg:w-10/12 w-11/12 m-auto  py-12'>
                <div className='flex md:overflow-hidden overflow-x-scroll gap-7 justify-between '>
                    <Link to='./Shop' >
                        <img className='min-w-40  ' src={Assests.Heroimg1} alt="TableWare" />
                        <p className='font-medium text-center p-4 text-stone-600'>TABLEWARE</p>
                    </Link>
                    <Link to='./Shop' >
                        <img className='min-w-40  ' src={Assests.Heroimg2} alt="HOME DECOR" />
                        <p className='font-medium text-center p-4 text-stone-600'>HOME DECOR</p>
                    </Link>
                    <Link to='./Shop' >
                        <img className='min-w-40  ' src={Assests.Heroimg3} alt="HOLIDAY" />
                        <p className='font-medium text-center p-4 text-stone-600'>HOLIDAY</p>
                    </Link>
                    <Link to='./Shop' >
                        <img className='min-w-40 ' src={Assests.Heroimg4} alt="COLLECTION" />
                        <p className='font-medium text-center p-4 text-stone-600'>COLLECTION</p>
                    </Link>
                </div>
                <div className='flex md:flex-row flex-col'>
                    <div className='md:w-7/12 lg:w-6/12  h-72 bg-gray-100 flex flex-col sm:p-4 justify-center text-center  gap-4'>
                        <p className='font-serif lg:text-3xl text-2xl text-stone-600'>Up to 40% off our <br  /> Christmas collection</p>
                        <p className='text-stone-600'>Lorem ipsum dolor sit amet consectetur <br className='sm:hidden block' /> adipiscing <br className='sm:block hidden'/> eli mattis sit  phasellus mollis sit <br className='sm:hidden block' />aliquam sit nullam <br className='sm:block hidden' /> neque ultrices.
                        </p>
                        <NavLink to='/shop'><button className='underline text-sm font-medium'>SHOP NOW</button></NavLink>
                    </div>
                    <img className='md:w-5/12 lg:w-6/12  h-72 object-cover object-center' src={Assests.Headlineimg} alt="headlineimg" />
                </div>

            </div>
        </div>
    )
}

export default Hero
