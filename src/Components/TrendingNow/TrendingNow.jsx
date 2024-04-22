import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { TrendingNowData } from "../../Utils/Api";

const TrendingNow = () => {
  return (
    <div className='trending-now-section'>
        <div className="container">
        <div className="heading">
            <h2 className="display-5">TRENDING NOW</h2>
        </div>
            <div className="row">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
            //     autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   }}
            //   loop={true}
                pagination={{
                  type: 'fraction',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
              >
                  {
                  TrendingNowData.map((item) => (
                    <SwiperSlide key={item.id}>
                    <div className='trending-now-card d-flex justify-content-center align-items-center'>
                          <div className='col-6'>    
                            <div className='trending-now-info'>
                              <h2 className='display-6 fw-400'>{item.price}</h2>
                              <h3 className='display-6 fw-600'>{item.title}</h3>
                              <p>{item.data}</p>
                              <div className="mb-2">
                                <Link>VIEW MORE</Link>
                              </div>
                            </div>
                          </div>
                          <div className='col-6'>    
                            <div className='trending-now-img'>
                              <img src={item.image} alt='' className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                  </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
    </div>
  )
}

export default TrendingNow
