import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { VictorIcon14 } from "../../../assets/icons/icons";
import Image1 from "../../../assets/images/image1.png";
import Carusel from "../../../components/carusel/Carusel";
import Button from "../../../components/button/Button";

const data = [
  {
    id: 0,
    title: "Lenovo Legion 7 Pro",
    img: "https://age.uz/upload/webp/resize_cache/1ee/400_400_1/hnc48rsbs4m1ykkj0149ixvhzbd6ftoa.webp",
    text: `16IRX8H (Intel Core i9-13900HX/DDR5 32GB/ SSD 2TB/ 16" WUXGA/ 16GB GF RTX4090)`,
  },
  {
    id: 1,
    title: "Asus ROG Strix Scar",
    img: "https://age.uz/upload/webp/resize_cache/e42/400_400_1/u6pycpz7xk8uulhl194yukzak9vijl4t.webp",
    text: `(AMD Ryzen 9 - 7945HX/ DDR5 32GB/ SSD 1TB PCIE G4/ 17" WQXGA / 16GB RTX 4090)`,
  },
  {
    id: 2,
    title: "HP Elite Dragonfly ",
    img: "https://age.uz/upload/webp/resize_cache/72c/400_400_1/pyjozpc1uc8412bhcrdgk0o79h8xe38s.webp",
    text: `x360 (998) (Intel i7-1165G7/ DDR4 16GB/ SSD 512GB/13,3 FHD IPS/Intel Iris Xe`,
  },
  {
    id: 3,
    title: "ASUS ROG Strix G15",
    img: "https://age.uz/upload/webp/resize_cache/4d2/400_400_1/flsg462pzit4ql18loov4d8344518hct.webp",
    text: `(Intel Core i5-13450HX/ DDR5 16GB/ SSD 512GB/ 16.0 WQXGA 165Hz/ 6GB GF RTX4050)`,
  },
  {
    id: 4,
    title: "Asus Zenbook S 13 ",
    img: "https://age.uz/upload/webp/resize_cache/dc5/400_400_1/l6lv1p300hebjtvjejr7l8gzqs4rpdfb.webp",
    text: `(Intel Core i7-1260P/ DDR5 16GB/ SSD 1TB M.2. NVMe/ 13.3" 2.8K (2880 x 1800))`,
  },
];
const Technologies = () => {
  return (
    <div className=" flex relative pt-[102px] flex-col xl:px-[84px] xs:px-[24px]">
      <div className=" lg:flex hidden absolute left-0 right-0 ">
        <VictorIcon14 />
      </div>
      <Carusel data={data} />
      <div id="services" className=" h-[130px]"></div>
      <div className="relative md:h-[450px]  sm:h-[800px] h-[700px] w-full rounded-[10px]  overflow-hidden  shadow-xl">
        <div
          style={{
            background:
              "radial-gradient(90% 100% at 75% 60%, #433D60 0%, #211E2E 100%)",
          }}
          className=" py-[20px] px-[60px] opacity-[0.8] w-[100%]  h-[100%] absolute top-0 left-0 right-0 bottom-0 z-1 "
        ></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 z-13  felx justify-between items-center  ">
          <div className=" md:w-[50%] w-full absolute md:h-full sm:h-[40%] h-[55%]  flex flex-col justify-center md:items-start items-center  md:left-0 bottom-0  lg:px-[60px] md:pl-[20px] f ">
            <h1 className="lg:text-[35px] text-[26px]  text-[#fff]  font-bold  leading-[48px] mb-[13px] md:text-start text-center ">
              O'zbekistonda shaxsiy kompyuter konfiguratori
            </h1>
            <p className=" lg:text-[16px] text-[13px] text-[#fff]  mb-[30px] md:text-start text-center">
              Kompyuteringizni protsessor, video karta, RAM bilan to'g'ri
              muvofiqlikda xatosiz o'zingiz yig'ing.
            </p>
            <Button text={"Kompyuter konfiguratoriga o'ting"} />
          </div>

          <div className=" md:w-[50%] w-full absolute md:h-full sm:h-[60%] h-[45%]  flex justify-center items-center  md:right-0 top-0 p-[20px]  ">
            <img src="https://age.uz/local/templates/age/img/monoblock.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
