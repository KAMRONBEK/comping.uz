import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import HomeCaruselItem from "../homeCaruselItem/HomeCaruselItem";
import { SwiperButtonNext } from "../swiperButtons/SwiperButtonNext";
import { SwiperButtonPrev } from "../swiperButtons/SwiperButtonPrev";
import "./style.css";
import { Autoplay } from "swiper/modules";
type propsType = {
  data: any;
};
const Carusel = (props: propsType) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1, // 640 piksel genişlikte iki slayt görünür
          },
          640: {
            slidesPerView: 2, // 640 piksel genişlikte iki slayt görünür
          },
          1024: {
            slidesPerView: 3, // 640 piksel genişlikte iki slayt görünür
          },

          1440: {
            slidesPerView: 4, // 768 piksel genişlikte üç slayt görünür
          },
        }}
      >
        <SwiperButtonPrev className="absolute  sm:hidden flex  bottom-[30%] z-10 w-[62px] h-[62px]  items-center justify-center rounded-full  hover:transition-all cursor-pointer group   shadow-md ">
          <div
            className="w-[44px] h-[44px] flex  justify-center items-center cursor-pointer rounded-full "
            style={{
              background:
                "linear-gradient(268deg, #C0B7E8 -0.6%, #8176AF 98.31%)",
            }}
          >
            <BsChevronLeft className=" text-primary-blue text-[27px] group-hover:text-white group-hover:transition-all" />
          </div>
        </SwiperButtonPrev>

        <SwiperButtonNext className=" absolute  sm:hidden flex   bottom-[30%] z-10 w-[62px] h-[62px] items-center justify-center rounded-full  hover:transition-all cursor-pointer right-0 group">
          <div
            className="w-[44px] h-[44px] flex  justify-center items-center cursor-pointer rounded-full "
            style={{
              background:
                "linear-gradient(268deg, #C0B7E8 -0.6%, #8176AF 98.31%)",
            }}
          >
            <BsChevronRight className="text-primary-blue text-[27px] group-hover:text-white group-hover:transition-all" />
          </div>
        </SwiperButtonNext>
        {props.data.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <HomeCaruselItem {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carusel;
