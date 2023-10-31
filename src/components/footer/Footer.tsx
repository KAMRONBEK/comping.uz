import React from "react";
import {
  FaceBookIcon,
  FooterLineIcon,
  FooterLineTopIcon,
  InstagramIcon,
  LinkedIcon,
  PinterestIcon,
  TwitterIcon,
  YoutobeIcon,
} from "../../assets/icons/icons";
import LogoImage from "../../assets/icons/logo.png";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className=" w-full  flex flex-col items-center xl:px-[84px] px-[24px]">
      <div className=" w-full grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        <div className="  flex items-center md:justify-between justify-center md:pr-[30px] lg:mb-0 mb-[30px]">
          <img src={LogoImage} />
          <div className=" md:flex hidden">
            <FooterLineTopIcon />
          </div>
        </div>
        <div className=" md:flex hidden justify-between  lg:pr-[30px] h-[196px] lg:ml-[40px] lg:mb-0 mb-[30px]">
          <ul className=" flex flex-col justify-between ">
            <li className=" text-[16px] text-[#fff] font-bold">ABOUT</li>
            <li className=" text-[16px] text-[#fff] font-bold">SERVICES</li>
            <li className=" text-[16px] text-[#fff] font-bold">TECHNOLOGIES</li>
            <li className=" text-[16px] text-[#fff] font-bold">HOW TO</li>
            <li className=" text-[16px] text-[#fff] font-bold">JOIN HYDRA</li>
          </ul>
          <div className=" lg:flex hidden">
            <FooterLineTopIcon />
          </div>
        </div>

        <div className="md:flex hidden justify-between  pr-[30px]   h-[196px] ml-[40px] ">
          <ul className=" flex flex-col  ">
            <li className=" text-[16px] text-[#fff] font-bold mb-[12px]">
              F.A.Q
            </li>
            <li className=" text-[16px] text-[#fff] font-bold mb-[12px]">
              SITEMAP
            </li>
            <li className=" text-[16px] text-[#fff] font-bold mb-[12px]">
              CONDITIONS
            </li>
            <li className=" text-[16px] text-[#fff] font-bold mb-[12px]">
              LICENSES
            </li>
          </ul>
          <FooterLineTopIcon />
        </div>
        <div className="flex flex-col  h-[196px] justify-between md:items-stretch items-center">
          <h1 className=" text-[#fff] text-[16px]">SOCIALIZE WITH HYDRA</h1>
          <div className=" flex items-center justify-between ">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="md:m-[0px] m-[10px]"
            >
              <FaceBookIcon />
            </a>
            <a
              href="https://twitter.com/i/flow/login"
              target="_blank"
              className="md:m-[0px] m-[10px]"
            >
              <TwitterIcon />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect"
              className="md:m-[0px] m-[10px]"
            >
              <LinkedIcon />
            </a>

            <a
              href="https://www.youtube.com/watch?v=fPO76Jlnz6c"
              className="md:m-[0px] m-[10px]"
              target="_blank"
            >
              <YoutobeIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="md:m-[0px] m-[10px]"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              className="md:m-[0px] m-[10px]"
            >
              <PinterestIcon />
            </a>
          </div>
          <Button text="BUILD YOUR WORLD" />
        </div>
      </div>
      <div className=" flex flex-col items-center mb-[19px] mt-[78px]">
        <FooterLineIcon />
        <div className=" flex md:flex-row flex-col items-center ">
          <p className=" font-bold text-[14px] uppercase text-[#fff] mt-[49px]">
            2023 © HYDRA LANDING PAGE
          </p>
          <p className=" font-bold text-[14px] uppercase text-[#fff] md:mt-[49px] mt-[19px]">
            BY ZINE. E. FALOUTI
          </p>
          <p className=" font-bold text-[14px] uppercase text-[#fff] md:mt-[49px] mt-[19px]">
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
