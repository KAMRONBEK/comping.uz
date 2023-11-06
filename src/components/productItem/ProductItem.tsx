import React from "react";
import Button from "../button/Button";
type propsType = {
  img?: string;
  title?: string;
  text?: string;
};
const ProductItem = (props: propsType) => {
  return (
    <div className=" relative w-[100%] flex  md:flex-row flex-col my-[40px] ">
      <div className="md:w-[50%] xl:h-[450px] lg:h-[400px]  flex md:justify-start justify-center   items-center  ">
        {/* <div className="xl:w-[524px] xl:h-[557px] lg:w-[474px] lg:h[500px]  md:w-[374px] md:h[400px] border  lg:rounded-tl-[240px] rounded-tl-[140px] lg:rounded-tr-[100px] rounded-tr-[60px] lg:rounded-br-[240px] rounded-br-[140px] lg:rounded-bl-[100px] rounded-bl-[60px] ">
       
        </div> */}
        <img src={props.img} className="w-[70%]  " />
      </div>
      <div className="md:w-[50%]  xl:h-[450px] lg:h-[400px] w-full flex flex-col md:items-start items-center  justify-center pl-[30px] ">
        <div className="md:flex flex-col hidden mb-[48px]">
          <h1 className="text-[36px] text-[#fff] font-bold">{props.title}</h1>
        </div>
        <div className="flex  flex-col items-start mb-[40px]">
          <p className=" text-[#fff] md:text-[16px] text-[12px] font-normal mb-[28px] md:mt-0 mt-[28px]">
            {props.text}
          </p>
          <Button text={"LET’S GET IN TOUCH"}></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
