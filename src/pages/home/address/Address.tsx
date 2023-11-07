import {
  AddressIcon,
  CallIcon,
  MessageIcon,
} from "../../../assets/icons/icons";

import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Autoplay, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AddressItem from "../../../components/addressItem/AddressItem";
import { SwiperButtonNext } from "../../../components/swiperButtons/SwiperButtonNext";
import { SwiperButtonPrev } from "../../../components/swiperButtons/SwiperButtonPrev";
const data = [
  {
    id: 0,
    icon: <AddressIcon />,
    title: "Bizga tashrif buyuring",
    text: `Labzak 2 122 51100149 TASHKENT`,
    link: "https://www.google.com/maps/place/Comping.Uz,+Labzak+2%2F122,+%D0%A2%D0%BEshkent+100149,+O%CA%BBzbekiston/@41.3359993,69.2704314,16z/data=!4m9!1m2!2m1!1sComping.Uz,+Labzak+2+122+51,+TASHKENT,+100149!3m5!1s0x38ae8bad3a9d4e7b:0xddccc7495fc164a5!8m2!3d41.3376166!4d69.2709525!16s%2Fg%2F11rfcy24p9",
  },
  {
    id: 1,
    icon: <CallIcon />,
    title: "Bizga qo'ng'iroq qiling",
    text: "+998338082030",
    link: "tel:+998901951625",
  },
  {
    id: 2,
    icon: <MessageIcon />,
    title: "Bizga xabar yuboring",
    text: "Contact@HydraVTech.com",
    link: "https://t.me/Comping_Uz",
  },
];

const Address = () => {
  return (
    <div
      className=" w-full  flex items-center mt-[80px]   h-[167px] py-[26px]  md:px-[30px]  "
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
        modules={[Mousewheel, Keyboard, Autoplay]}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        className=" z-20 w-full h-full  "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
            <SwiperSlide
              key={item.id}
              className=" flex items-center justify-center "
            >
              <AddressItem key={item.id} {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Address;
