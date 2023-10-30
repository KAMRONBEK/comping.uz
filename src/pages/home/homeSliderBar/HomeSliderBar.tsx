import React, { useEffect, useState } from 'react';
import SliderImage from '../../../assets/images/pexels-michelangelo-buonarroti.png';
import Button from '../../../components/button/Button';
import { ArrowLeftIcon } from '../../../assets/icons/icons';
const HomeSliderBar = () => {
	return (
		<div
			className={`w-full sm:flex sm:items-center items-start  justify-between  xl:h-[500px] mt-[120px] xl:px-[84px] xs:px-[24px]`}
		>
			<div className="container mx-auto  flex md:flex-row   flex-col-reverse  items-center justify-between  w-full">
				<div className=" md:w-[50%] lg:h-[500px]  w-full flex md:justify-start justify-center items-center   ">
					<div className=" lg:w-[450px] lg:h-[426px] w-full  flex flex-col justify-center  md:items-start items-center">
						<h1 className=" text-white  md:text-[42px] text-[24px] font-bold ">
							<span className="text-[#8176AF]  md:text-[42px] text-[32px] ">Dive</span> Into The Depths
						</h1>
						<h1 className=" text-white md:text-[42px] text-[24px] font-bold ">
							Of <span className="text-[#8176AF]  md:text-[42px] text-[32px]">Virtual Reality</span>
						</h1>
						<p className=" md:flex hidden text-[16px] text-[#fff] mt-[20px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .
						</p>
						<div className=" flex items-center justify-start">
							<Button
								text="BUILD YOUR WORLD"
								className={
									' hover:bg-[#8176AF] hover:text[#343045] cursor-pointer hover:border-[#8176AF] border-[2px] '
								}
							/>

							<button className="md:flex hidden">
								<ArrowLeftIcon />
							</button>
						</div>
					</div>
				</div>
				<div className="md:w-[50%] lg:h-[500px] h-[400px] w-full flex md:justify-end justify-center items-center ">
					<div className="lg:w-[490px] lg:h-[426px] sm:w-[390px] sm:h-[326px] w-[280px] h-[286px]  rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] shadow-custom ">
						<img
							src={SliderImage}
							className="rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] w-full h-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSliderBar;
