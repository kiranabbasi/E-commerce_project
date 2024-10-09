import React from 'react'
import Hero from '../Components/Hero'
import BestSeller from '../Components/BestSeller'
import NewArrivals from '../Components/NewArrivals'
import HomeAbout from '../Components/HomeAbout'
import HomeBlog from '../Components/HomeBlog'
import NewsLetter from '../Components/NewsLetter'


const Home = () => {
  return (
    <div>
      <Hero/>
      <BestSeller/>
      <HomeAbout/>
      <NewArrivals/>
      <HomeBlog/>
      <NewsLetter/>
      

    </div>
  )
}

export default Home
