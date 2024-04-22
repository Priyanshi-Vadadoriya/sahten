import React from 'react'
import OrderTheBest from '../../Components/OrderTheBest/OrderTheBest'
import TrendingNow from '../../Components/TrendingNow/TrendingNow'
import PopularDishe from '../../Components/PopularDishes/PopularDishe'
import BlogsSection from '../../Components/Blogs/BlogsSection'

const Home = () => {
  return (
    <div>
      {/* order-the-best-section  start  */}
      <OrderTheBest/>
      {/* order-the-best-section  end  */}
    
      {/* trending-now-section start  */}
      <TrendingNow/>
      {/* trending-now-section end  */}

     {/* popular-dishes-section start  */}
      <PopularDishe/>
     {/* popular-dishes-section end  */}

      {/* popular-dishes-section start  */}
      <BlogsSection/>
      {/* popular-dishes-section end  */}
    </div>
  )
}

export default Home
