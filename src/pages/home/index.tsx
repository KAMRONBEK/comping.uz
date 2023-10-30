import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import HomeSliderBar from "./homeSliderBar/HomeSliderBar";
import {
  VictorIcon1,
  VictorIcon16,
  VictorIcon17,
  VictorIcon2,
  VictorIcon3,
  VictorIcon4,
} from "../../assets/icons/icons";
import NavModal from "../../components/navModal/NavModal";
import Address from "./address/Address";
import About from "./about/About";
import Carusel from "./carusel/Carusel";
import Brend from "./brend/Brend";
import Build from "./build/Build";
import Form from "./form/Form";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div className="bg-[#302C42] min-h-screen  overflow-hidden w-full 2xl:w-[1440px] relative  mx-auto py-[50px] ">
      <div className=" absolute sm:top-[170px] sm:right-0 top-[77px] -right-[59px] -z-1">
        <VictorIcon1 />
      </div>
      <div className=" absolute sm:top-0  sm:right-[134px] -top-[65px] right-[54px] -z-1">
        <VictorIcon2 />
      </div>
      <div className=" absolute top-[419px] sm:right-0 -right-[80px] -z-1">
        <VictorIcon3 />
      </div>
      <div className=" sm:flex hidden  absolute top-[274px] sm:left-0 -z-1">
        <VictorIcon4 />
      </div>
      {/* <div className="absolute left-0 right-0  bottom-[348px]  -z-1">
        <VictorIcon16 />
      </div>
      <div className="absolute left-0 right-0  bottom-[168px]  -z-1">
        <VictorIcon17 />
      </div> */}

      <div className="z-10 relative  w-full ">
        <Navbar
          openModal={openModal}
          setOpenModal={setOpenModal}
          isScrolled={isScrolled}
        />
        {isScrolled ? (
          <div className="mt-[210px]">
            <HomeSliderBar />
          </div>
        ) : (
          <HomeSliderBar />
        )}
        <div className="xl:px-[84px] xs:px-[24px]">
          <Address />
        </div>
        <About />
        <Carusel />
        <Brend />
        <Build />
        <Form />
        <Footer />
      </div>
      <div className="z-11 relative">
        <NavModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Home;
