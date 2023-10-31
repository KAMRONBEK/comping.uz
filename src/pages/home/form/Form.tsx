import React, { ChangeEvent, useState } from "react";
import { CircleIcon } from "../../../assets/icons/icons";
import DefaultInput from "../../../components/defaultInput/DefaultInput";
import Button from "../../../components/button/Button";

const HomeForm = () => {
  const [onchange, setOnchange] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOnchange(e.target.value);
  };

  return (
    <div className="xl:px-[84px] sm:px-[24px] mb-[120px]">
      <div
        className=" w-full relative  flex flex-col items-center py-[90px] lg:px-[107px] px-[20px] md:rounded-[100px] rounded-[40px] "
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1 className=" sm:text-[36px] text-[24px]  text-[#fff] font-bold mb-[30px]">
          JOIN HYDRA
        </h1>
        <CircleIcon />
        <h2 className="sm:text-[36px] text-[24px]  text-center text-[#fff]  font-light mt-[21px] ">
          Let’s Build Your VR Experience
        </h2>
        <div className=" w-full flex md:flex-row flex-col md:items-center mt-[16px] ">
          <DefaultInput placeholder="First Name" />
          <DefaultInput placeholder="Last Name" />
        </div>
        <div className=" w-full flex  md:flex-row flex-col md:items-center  ">
          <DefaultInput placeholder="Email" />
          <DefaultInput placeholder="Phone Number" />
        </div>
        <DefaultInput placeholder="Subject" />
        <DefaultInput textarea={true} placeholder="Tell Us Something..." />
        <Button text="SEND TO HYDRA" className={" mt-[57px]  "} />
      </div>
    </div>
  );
};

export default HomeForm;
