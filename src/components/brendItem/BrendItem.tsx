import React from "react";
type propsType = {
  id?: number;
  link?: string;
  img?: string;
};
const BrendItem = (props: propsType) => {
  return (
    <div className=" flex flex-col items-center w-[180px]   ">
      <a
        href={props?.link}
        className=" w-[180px]  h-[84px] flex justify-center items-center  mb-[10px] rounded-[20px]  "
        style={{
          background:
            " radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)",
        }}
      >
        <img src={props.img} />
      </a>
      {/* <a
        href={props?.link}
        className=" w-[180px]  h-[84px] flex justify-center items-center mb-[10px]  rounded-[20px]"
      >
        <img src={props.img} />
      </a>
      <a
        href={props?.link}
        className=" w-[180px]  h-[84px] flex justify-center items-center rounded-[20px]"
      
      >
        <img src={props.img} />
      </a> */}
    </div>
  );
};

export default BrendItem;
