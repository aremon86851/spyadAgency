import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import SpydeData from "@/config/SpydeData";
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
        {SpydeData.heroSliderImg.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="images" className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarrousel;
