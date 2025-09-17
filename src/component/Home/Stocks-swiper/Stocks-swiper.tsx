import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Stock_1 from "../../../img/stocks_1.png";
import Stock_2 from "../../../img/stocks_2.png";
import Stock_3 from "../../../img/stocks_3.png";
import styles from "./Stocks-swiper.module.scss";
import Button from "../../../img/stocks_button.svg";

function Stocks() {
  return (
    <div className={styles.stock}>
      <div className="container">
        <div className={styles.wrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            className={styles.mySwiper}
            initialSlide={1}
          >
            <SwiperSlide className={styles.slide}>
              <img src={Stock_2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Stock_3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Stock_1} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={Stock_2} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className={styles.button_swiper}>
            <div className="swiper-button-prev">
              <img src={Button} alt="Previous" />
            </div>
            <div className="swiper-button-next">
              <img src={Button} alt="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
