import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);


const Slider = () => {
    return(
    <>
    
    </>
    );
}



const ImageSlider = (props) => {
    const images = props.images
  return (
    
    <main className="ExampleComponent">
      <div className="main-wrap">
        <Swiper
          style={{
            width: "60vh",
            height: "80vh",
            // backgroundColor: "#FFF5F1",
            borderRadius: "12px",
          }}
          spaceBetween={50}
          initialSlide={props.pick}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide><img src={images.a} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.b} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.c} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.d} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.e} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.f} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.g} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.h} alt="" width="100%" height="100%"/></SwiperSlide>
          <SwiperSlide><img src={images.i} alt="" width="100%" height="100%"/></SwiperSlide>

        </Swiper>
      </div>
    </main>
    
  )
}

export default ImageSlider