import React from "react";
import { VictorIcon15 } from "../../../assets/icons/icons";
import BuildItem from "../../../components/buildItem/BuildItem";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { SwiperButtonPrev } from "../../../components/swiperButtons/SwiperButtonPrev";
import { SwiperButtonNext } from "../../../components/swiperButtons/SwiperButtonNext";
const data = [
  {
    id: 0,
    number: "01",
    title: "Kerakli uskunalarni bilan tanishing",
  },
  {
    id: 1,
    title: `Uzingizga ma'qul uskunlarni qushing`,
    number: "02",
  },
  {
    id: 2,
    number: "03",
    title: `Eng ma'qul mahsulotlarni tanlang `,
  },
  {
    id: 3,
    number: "04",
    title: `Bizga murojat qiling`,
  },
];
const Build = () => {
  return (
    <div className="relative w-full  mb-[120px]  xl:px-[84px] xs:px-[24px] ">
      <div className=" lg:flex hidden absolute top-0 right-0 left-0">
        <VictorIcon15 />
      </div>
      <Swiper
        // cssMode={true}
        slidesPerView={4}
        // modules={[Mousewheel, Keyboard, Pagination]}
        // mousewheel={true}
        // keyboard={true}
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
        <SwiperButtonPrev className="absolute  sm:hidden flex   bottom-[30%] z-10 w-[62px] h-[62px]  items-center justify-center rounded-full  hover:transition-all cursor-pointer group   shadow-md ">
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

        <SwiperButtonNext className=" absolute sm:hidden flex   bottom-[30%] z-10 w-[62px] h-[62px] items-center justify-center rounded-full  hover:transition-all cursor-pointer right-0 group">
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
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <BuildItem {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Build;
