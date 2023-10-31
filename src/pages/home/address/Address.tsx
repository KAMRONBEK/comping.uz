import {
  AddressIcon,
  CallIcon,
  MessageIcon,
} from "../../../assets/icons/icons";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import { Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeCaruselItem from "../../../components/homeCaruselItem/HomeCaruselItem";
import { SwiperButtonNext } from "../../../components/swiperButtons/SwiperButtonNext";
import { SwiperButtonPrev } from "../../../components/swiperButtons/SwiperButtonPrev";
import AddressItem from "../../../components/addressItem/AddressItem";
const data = [
  {
    id: 0,
    icon: <AddressIcon />,
    title: "Pay Us a Visit",
    text: "Union St, Seattle, WA 98101, United States",
    border: false,
  },
  {
    id: 1,
    icon: <CallIcon />,
    title: "Give Us a Call",
    text: "(110) 1111-1010",
    border: false,
  },
  {
    id: 2,
    icon: <MessageIcon />,
    title: "Send Us a Message",
    text: "Contact@HydraVTech.com",
    border: false,
  },
  {
    id: 3,
    icon: <MessageIcon />,
    title: "Send Us a Message",
    text: "Contact@HydraVTech.com",
    border: false,
  },
];

const Address = () => {
  return (
    <div
      className=" w-full  flex items-center my-[80px]   h-[167px] py-[26px]  md:px-[30px]  "
      style={{
        background:
          "radial-gradient(2900.76% 50.13% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)",
        boxShadow: " 0px 4px 4px 0px rgba(192, 183, 232, 0.01)",
        borderRadius: "90px",
      }}
    >
      <Swiper
        cssMode={true}
        slidesPerView={4}
        modules={[Mousewheel, Keyboard]}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        className=" z-20"
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
        {data.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <AddressItem key={item.id} {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Address;
