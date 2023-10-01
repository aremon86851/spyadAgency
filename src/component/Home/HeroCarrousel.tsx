import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
const HeroCarrousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ backgroundColor: "red", height: 200, width: 100 }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "red", height: 200, width: 100 }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "red", height: 200, width: 100 }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: "red", height: 200, width: 100 }}
        >
          Slide 1
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCarrousel;
