import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);
const Swipe = () => {

    return (
        <>
         <Swiper
              style={{
                width: "100%",
                height: "500px",
                backgroundColor: "#FFF5F1",
                borderRadius: "12px",
              }}
              spaceBetween={8}
              initialSlide={1}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide><img src="https://images.pexels.com/photos/7862462/pexels-photo-7862462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  height="500px" width="500px"/></SwiperSlide>
              <SwiperSlide><img src="https://images.pexels.com/photos/7862462/pexels-photo-7862462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  height="500px" width="500px"/></SwiperSlide>
              <SwiperSlide>슬라이더2</SwiperSlide>
              <SwiperSlide>슬라이더4</SwiperSlide>
              <SwiperSlide>슬라이더5</SwiperSlide>
              <SwiperSlide>슬라이더6</SwiperSlide>
              <SwiperSlide>슬라이더7</SwiperSlide>
            </Swiper>
    
        
        </>
           
          );

}

export default Swipe