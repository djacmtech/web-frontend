import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "./InternshipFair.css";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// import "./styles.css";
import { FreeMode } from "swiper";
// import required modules
import { Navigation } from "swiper";
import wiseidot from "../Assets/wiseidot.png";
import yocket from "../Assets/yocket.jpg";
import spacenos from "../Assets/spacenos.png";
import skyindya from "../Assets/skyindya.jpg";
import prixled from "../Assets/prixled.jpg";
import mspaces from "../Assets/mspaces.jpg";
import monke from "../Assets/monke.png";
import illustech from "../Assets/illustech.jpg";
import ichars from "../Assets/ichars.png";
import embedos from "../Assets/embedos.png";
import cyberfrat from "../Assets/cyberfrat.jpg";
import boson from "../Assets/boson.webp";
import birthvenue from "../Assets/birthvenue.jpg";
import confluencr from "../Assets/confluencr.png";

const PastCompanies = () => {
  return (
    <div style={{ display: "flex", alignItems: "center",paddingTop:"50px", paddingBottom:"100px" }}>
      <div className="pastCompanies">-------- PAST COMPANIES</div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation, FreeMode]}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={wiseidot} alt=""/></SwiperSlide>
        <SwiperSlide><img src={yocket} alt=""/></SwiperSlide>
        <SwiperSlide><img src={spacenos} alt=""/></SwiperSlide>
        <SwiperSlide><img src={skyindya} alt=""/></SwiperSlide>
        <SwiperSlide><img src={prixled} alt=""/></SwiperSlide>
        <SwiperSlide><img src={mspaces} alt=""/></SwiperSlide>
        <SwiperSlide><img src={monke} alt=""/></SwiperSlide>
        <SwiperSlide><img src={illustech} alt=""/></SwiperSlide>
        <SwiperSlide><img src={ichars} alt=""/></SwiperSlide>
        <SwiperSlide><img src={embedos} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cyberfrat} alt=""/></SwiperSlide>
        <SwiperSlide><img src={boson} alt=""/></SwiperSlide>
        <SwiperSlide><img src={birthvenue} alt=""/></SwiperSlide>
        <SwiperSlide><img src={confluencr} alt=""/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PastCompanies;
