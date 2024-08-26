import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/CarouselPage.css';

import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.jfif';

const YendoPage = () => {
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
        <SwiperSlide><img src={img1} alt="Imagen 1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Imagen 2" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Imagen 3" /></SwiperSlide>
      </Swiper>

      <div className="carousel-caption">
        <p>¡Te veo ahí! 😊</p>
      </div>
    </div>
  );
};

export default YendoPage;
