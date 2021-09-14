
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
  <SwiperSlide><img src="../img/slider-1.jpg" alt="Первый слайд"/></SwiperSlide><SwiperSlide><img src="../img/slider-2.jpg" alt="Второй слайд"/></SwiperSlide><SwiperSlide><img src="../img/slider-3.jpg" alt="Третий слайд"/></SwiperSlide>
  </Swiper>
    </>
  )
}