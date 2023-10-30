import React from "react";
import AboutItem from "../../../components/aboutItem/AboutItem";
import AboutImage from "../../../assets/images/about.png";
import Button from "../../../components/button/Button";
import { VictorIcon7, VictorIcon8 } from "../../../assets/icons/icons";

const About = () => {
  return (
    <div className="relative xl:px-[84px] xs:px-[24px]  ">
      <div className=" xl:flex hidden absolute left-0 right-0 top-[200px] ">
        <VictorIcon7 />
      </div>
      <div className=" xl:flex hidden  absolute left-0 right-0 top-[500px] ">
        <VictorIcon8 />
      </div>
      <AboutItem
        title2="TO HYDRA VR"
        title="INTRODUCTION"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div className=" relative w-full flex  md:flex-row flex-col my-[90px]">
        <div className="md:w-[45%] xl:h-[557px] lg:h[450px] w-full flex md:justify-statrt  items-center   ">
          <div className="xl:w-[524px] xl:h-[557px] lg:h[450px]   rounded-tl-[240px] rounded-tr-[100px] rounded-br-[240px] rounded-bl-[100px] shadow-custom ">
            <img
              src={AboutImage}
              className="rounded-tl-[240px] rounded-tr-[100px] rounded-br-[240px] rounded-bl-[100px] "
            />
          </div>
        </div>
        <div className="md:w-[45%] lg:h-[557px]  w-full flex flex-col items-start justify-start  lg:pl-[80px]">
          <div className="  mb-[48px]">
            <h1 className="text-[36px] text-[#fff] font-bold">ABOUT</h1>
            <h2 className="text-[34px] text-[#fff]   font-light">HYDRA VR</h2>
          </div>
          <div className="">
            <p className=" text-[#fff] text-[16px] font-normal mb-[28px]">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <Button text={"LET’S GET IN TOUCH"}></Button>
          </div>
        </div>
      </div>
      <AboutItem
        title2="TO HYDRA VR"
        title="INTRODUCTION"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
    </div>
  );
};

export default About;
