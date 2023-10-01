import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const ImageGallery = () => {
  return (
    <section>
      <div className="">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper bg-gray-700"
          >
            <SwiperSlide style={{ width: "100% !important" }}>
              <div>
                <img src="/images/img-gallery.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100% !important" }}>
              <div>
                <img src="/images/img-gallery.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100% !important" }}>
              <div>
                <img src="/images/img-gallery.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100% !important" }}>
              <div>
                <img src="/images/img-gallery.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100% !important" }}>
              <div>
                <img src="/images/img-gallery.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: "100% !important" }}>
              <div>
                <img src="/images/img-gallery.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default ImageGallery;
