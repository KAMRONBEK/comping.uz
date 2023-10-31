import React from "react";
import { AddressIcon } from "../../assets/icons/icons";
type propsType = {
  id?: number;
  icon?: any;
  title?: string;
  text?: string;
  border?: boolean;
};
const AddressItem = (props: propsType) => {
  return (
    <div
      className={`w-[100%] bg-transparent flex sm:flex-row flex-col items-center justify-center  h-[100%]  mx-[30px] z-10   `}
    >
      <div>{props.icon}</div>
      <div className=" flex flex-col  items-center">
        <h1 className=" text-[#fff] md:text-[24px] text-[18px] font-bold ">
          {props.title}
        </h1>
        <p className=" text-[#fff] md:text-[14px] text-[12pxpx]  font-normal ">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default AddressItem;
