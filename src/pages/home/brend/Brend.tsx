import React from "react";
import BrendImage from "../../../assets/images/Hydra-Tech3 1.png";
import Image1 from "../../../assets/images/image1.png";
import AboutItem from "../../../components/aboutItem/AboutItem";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonPrev } from "../../../components/swiperButtons/SwiperButtonPrev";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SwiperButtonNext } from "../../../components/swiperButtons/SwiperButtonNext";
import BrendItem from "../../../components/brendItem/BrendItem";
const data = [
  {
    id: 0,
    img: "https://age.uz/upload/webp/resize_cache/e2f/120_60_1/y9zvvn9p6a8oc1tp347f2e1um8o3qv51.webp",
    link: "",
  },
  {
    id: 1,
    img: "https://age.uz/upload/webp/resize_cache/58a/120_60_1/zze517aqsm39acrmwxje5s6p1n6to664.webp",
    link: "",
  },
  {
    id: 2,
    img: "https://age.uz/upload/webp/resize_cache/db1/120_60_1/jl2iasbow1rby2a9uv0l027rwslj468k.webp",
    link: "",
  },
  {
    id: 3,
    img: "https://age.uz/upload/webp/resize_cache/690/120_60_1/efd4idbykfs32paqm5n7p3mmmy2a9pjk.webp",
    link: "",
  },
  {
    id: 4,
    img: "https://age.uz/upload/webp/resize_cache/729/120_60_1/sgdfq24y1313m5ks9xxun14ub1wmaslv.webp",
    link: "",
  },
  {
    id: 6,
    img: "https://age.uz/upload/webp/resize_cache/fda/120_60_1/rkztgsk3ll7syk7txbg6irabmrqd811r.webp",
    link: "",
  },
];
const Brend = () => {
  return (
    <div
      id="technologies"
      className="w-full flex flex-col xl:px-[84px] xs:px-[24px] mb-[120px]  "
    >
      <div>
        <h1 className=" text-white text-[26px] ">Brendlar</h1>
      </div>
      <div className="w-full  mb-[90px] mt-[30px] ">
        <Swiper
          // cssMode={true}
          slidesPerView={4}
          // modules={[Mousewheel, Keyboard]}
          // mousewheel={true}
          // keyboard={true}
          // pagination={{ clickable: true }}
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
              slidesPerView: 5, // 768 piksel genişlikte üç slayt görünür
            },
          }}
          className="w-full h-[100%]"
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

          <SwiperButtonNext className=" absolute sm:hidden flex    bottom-[30%] z-10 w-[62px] h-[62px] items-center justify-center rounded-full  hover:transition-all cursor-pointer right-0 group">
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
          {data.map((item: any) => {
            return (
              <SwiperSlide
                key={item.id}
                className=" felx justify-center items-center "
              >
                <BrendItem {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <AboutItem
        title="Biz qanday quramiz"
        title2="COMPING BILANMI?"
        text="Hayot donishmandlari keksalikda, nabiralarda yashaydi.Men bundan juda xursandman
Endi ommaviy rivojlanishni kim moliyalashtiradi? Viverra yuk mashinalariga juda ko'p er kerak. Bezatish uchun
karavotga sarmoya kiritiladi. To'shak - bu dunyo hayotining katta qush ko'rinishi."
      />
    </div>
  );
};

export default Brend;
