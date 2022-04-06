import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "./InternshipFair.css";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// import "./styles.css";
import { FreeMode } from "swiper";
// import required modules
import { Navigation } from "swiper";

const PastCompanies = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="pastCompanies"> - - - PAST COMPANIES</div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation, FreeMode]}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PastCompanies;
