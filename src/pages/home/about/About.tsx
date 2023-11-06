import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { VictorIcon7, VictorIcon8 } from "../../../assets/icons/icons";
import AboutItem from "../../../components/aboutItem/AboutItem";
import ProductItem from "../../../components/productItem/ProductItem";
const data = [
  {
    id: 0,
    img: "https://age.uz/upload/webp/resize_cache/6e2/325_349_1/1vv8s1ljdj9l69lq9aem62kkdt1qr2if.webp",
    title: "Asus X515",
    text: `Hosildorlik uchun mobil platforma, Gibrid saqlash quyi tizimi, Zamonaviy komponentlar`,
  },
  {
    id: 1,
    img: "https://age.uz/upload/webp/resize_cache/6e2/325_349_1/1vv8s1ljdj9l69lq9aem62kkdt1qr2if.webp",
    title: "Asus X515",
    text: `Hosildorlik uchun mobil platforma, Gibrid saqlash quyi tizimi, Zamonaviy komponentlar`,
  },
  {
    id: 2,
    img: "https://age.uz/upload/webp/resize_cache/6e2/325_349_1/1vv8s1ljdj9l69lq9aem62kkdt1qr2if.webp",
    title: "Asus X515",
    text: `Hosildorlik uchun mobil platforma, Gibrid saqlash quyi tizimi, Zamonaviy komponentlar`,
  },
];
const About = () => {
  return (
    <div className="relative xl:px-[84px] xs:px-[24px]" id="about">
      <div className=" xl:flex hidden absolute left-0 right-0 top-[200px] ">
        <VictorIcon7 />
      </div>
      <div className=" xl:flex hidden  absolute left-0 right-0 top-[500px] ">
        <VictorIcon8 />
      </div>
      <AboutItem
        title2="COMPING GA"
        title="KIRISH"
        text="Hayot donishmandlari keksalikda, nabiralarda yashaydi. Men bundan juda xursandman Endi ommaviy rivojlanishni kim moliyalashtiradi? Viverra yuk mashinalariga juda ko'p er kerak. Bezatish uchun karavotga sarmoya kiritiladi. To'shak - bu dunyo hayotining katta qush ko'rinishi."
      />
      <Swiper className="mySwiper">
        {data.map((item) => {
          return (
            <SwiperSlide className="w-full" key={item.id.toString()}>
              <ProductItem {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <AboutItem
        title2="COMPING BILANMI?"
        title="NEGA QURISH"
        text="Hayot donishmandlari keksalikda, nabiralarda yashaydi. Men bundan juda xursandman Endi ommaviy rivojlanishni kim moliyalashtiradi? Viverra yuk mashinalariga juda ko'p er kerak. Bezatish uchun karavotga sarmoya kiritiladi. To'shak - bu dunyo hayotining katta qush ko'rinishi."
      />
    </div>
  );
};

export default About;
