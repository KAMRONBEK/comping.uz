import React from "react";
import { ArrowLeftIcon, LineIcon } from "../../assets/icons/icons";
type propsType = {
  title?: string;
  title2?: string;
  text?: string;
};
const AboutItem = (props: propsType) => {
  return (
    <div className=" w-full flex  items-start justify-between">
      <div className="lg:w-[50%] w-full flex flex-col  lg:items-start lg:justify-start items-center justify-center">
        <h1 className="text-[#fff] uppercase md:text-[36px] text-[26px] font-bold  p-0 m-0 ">
          {props.title}
        </h1>
        <div className="flex items-center relative ">
          <p className="md:text-[36px] text-[26px] text-[#fff] p-0 m-0 list-none  font-light">
            {props.title2}
          </p>
          <div className=" lg:flex w-[228px] hidden items-center relative ml-[30px] ">
            <div className=" absolute ">
              <LineIcon />
            </div>
            <div className=" absolute right-2">
              <ArrowLeftIcon height={100} />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:w-[50%] lg:flex hidden">
        <p className=" text-[#fff] text-[16px]">{props.text}</p>
      </div>
    </div>
  );
};

export default AboutItem;
