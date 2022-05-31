import './InternshipFair.css';
import TestimonialCards from './TestimonialCards';
import TestimonialCards2 from './TestimonialCards2';
import TestimonialCards3 from './TestimonialCards3';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import { FreeMode } from "swiper";
import { Navigation } from "swiper";

export default function Testimonials() {
    return (
        <div style={{padding:"50px 0 150px 0"}} id='Testimonial'>
        <h1 className="heading">
          --------  TESTIMONIALS
        </h1>
          <Swiper
            navigation={true}
            modules={[Navigation, FreeMode]}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            className="testimonialSwiper"
          >
            <SwiperSlide><TestimonialCards/></SwiperSlide>
            <SwiperSlide><TestimonialCards2/></SwiperSlide>
            <SwiperSlide><TestimonialCards3/></SwiperSlide>
          </Swiper>
        </div>
    )
}