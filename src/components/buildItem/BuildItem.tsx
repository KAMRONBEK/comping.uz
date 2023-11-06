import React from "react";
import { ArrowLeftIcon } from "../../assets/icons/icons";
type propsType = {
  number?: any;
  title?: string;
};
const BuildItem = (props: propsType) => {
  return (
    <div className=" w-full flex  flex-col items-center ">
      <div
        className=" w-[198px] h-[198px] rounded-[50%] flex justify-center items-center z-10 "
        style={{ background: "rgba(13, 13, 13, 0.32)" }}
      >
        <div
          style={{
            background:
              "linear-gradient(251deg, #C0B7E8 12.87%, #8176AF 89.33%) ",
          }}
          className=" w-[159px] h-[159px] rounded-[50%] flex justify-center items-center "
        >
          <p className=" text-[64px] text-[#343045] font-bold">
            {props.number}
          </p>
        </div>
      </div>
      <div className="flex  items-center  w-[250px] ">
        <ArrowLeftIcon />
        <p className=" text-[24px] text-[#fff]">{props?.title}</p>
      </div>
    </div>
  );
};

export default BuildItem;
