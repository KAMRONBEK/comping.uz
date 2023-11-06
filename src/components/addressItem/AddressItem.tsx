import React from "react";
import { AddressIcon } from "../../assets/icons/icons";
type propsType = {
  id?: number;
  icon?: any;
  title?: string;
  text?: string;
  link?: string;
};
const AddressItem = (props: propsType) => {
  return (
    <div className={`cursor-pointer  h-[100%] `}>
      <a
        href={props?.link}
        // target=" _blank"
        className="w-[100%] bg-transparent  h-[100%] flex sm:flex-row flex-col items-center justify-center "
      >
        <div>{props.icon}</div>
        <div className=" flex flex-col  sm:items-start items-center ml-[10px]">
          <h1 className=" text-[#fff] md:text-[24px] text-[18px] font-bold ">
            {props.title}
          </h1>
          <p className=" text-[#fff] md:text-[14px] text-[12pxpx]  font-normal ">
            {props.text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default AddressItem;
