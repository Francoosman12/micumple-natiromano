import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/CarouselPage.css';

import img1 from '../assets/image4.jpg';
import img2 from '../assets/image5.jpg';
import img3 from '../assets/image6.jpg';

const NoPuedoPage = () => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="Imagen 4" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Imagen 5" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Imagen 6" /></SwiperSlide>
      </Swiper>

      <div className="carousel-caption">
        <p>¡Te voy a extrañar! 😔</p>
      </div>
    </div>
  );
};

export default NoPuedoPage;
