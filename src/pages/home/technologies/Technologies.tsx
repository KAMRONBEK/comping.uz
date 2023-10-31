import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { VictorIcon14 } from "../../../assets/icons/icons";
import Image1 from "../../../assets/images/image1.png";
import Carusel from "../../../components/carusel/Carusel";

const data = [
  {
    id: 0,
    title: "SIMULATION",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700",
    text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
  },
  {
    id: 1,
    title: "SIMULATION",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700",
    text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
  },
  {
    id: 2,
    title: "SIMULATION",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700",
    text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
  },
  {
    id: 3,
    title: "SIMULATION",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700",
    text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
  },
  {
    id: 4,
    title: "SIMULATION",
    img: "https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700",
    text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
  },
];
const Technologies = () => {
  return (
    <div className=" flex relative mt-[102px] flex-col xl:px-[84px] xs:px-[24px]">
      <div className=" lg:flex hidden absolute left-0 right-0 ">
        <VictorIcon14 />
      </div>
      <Carusel data={data} />
      <div
        className=" lg:flex hidden h-[303px] w-full rounded-[160px] mt-[114px] flex-shrink-0"
        style={{
          background: `linear-gradient(0deg, rgba(48, 44, 66, 0.79) 0%, rgba(48, 44, 66, 0.79) 100%), url(${Image1}), lightgray 50% / cover no-repeat`,
        }}
      ></div>
    </div>
  );
};

export default Technologies;
