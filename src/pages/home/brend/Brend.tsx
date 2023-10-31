import React from "react";
import BrendImage from "../../../assets/images/Hydra-Tech3 1.png";
import Image1 from "../../../assets/images/image1.png";
import AboutItem from "../../../components/aboutItem/AboutItem";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonPrev } from "../../../components/swiperButtons/SwiperButtonPrev";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SwiperButtonNext } from "../../../components/swiperButtons/SwiperButtonNext";
const data = [
  {
    id: 0,
    img: BrendImage,
  },
  {
    id: 1,
    img: BrendImage,
  },
  {
    id: 2,
    img: BrendImage,
  },
  {
    id: 3,
    img: BrendImage,
  },
  {
    id: 4,
    img: BrendImage,
  },
];
const Brend = () => {
  return (
    <div className="w-full flex flex-col xl:px-[84px] xs:px-[24px] mb-[120px] ">
      <div className="w-full flex justify-between items-center">
        <>
          <Swiper
            cssMode={true}
            slidesPerView={4}
            modules={[Mousewheel, Keyboard]}
            mousewheel={true}
            keyboard={true}
            pagination={{ clickable: true }}
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
                <SwiperSlide key={item.id}>
                  <img src={item.img} className="w-[250px] h-[250px]  " />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
      <AboutItem
        title="HOW WE BUILD"
        title2="WITH HYDRA VR?"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
    </div>
  );
};

export default Brend;
