import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// Import your custom styles
import './styles.css';

// Import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000} // Adjust this value for smoother transition
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./1st.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./2nd.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./3rd.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./4th.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./5th.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
