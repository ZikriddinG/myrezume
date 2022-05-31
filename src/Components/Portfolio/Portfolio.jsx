import React from "react";
import "./Portfolio.css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"}>
      {/* Heading */}
      <span>Tayyorlanadigan Loyihalar</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        className="portfolio-slider"
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
