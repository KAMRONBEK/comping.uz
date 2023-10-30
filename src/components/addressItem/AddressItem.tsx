import React from 'react';
import { AddressIcon } from '../../assets/icons/icons';
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
			className={`w-[100%] bg-transparent flex sm:flex-row flex-col px-[40px] h-[100%] ${
				props.border ? 'sm:border-r md:border-[#fff]' : 'border-0'
			} `}
		>
			<div>{props.icon}</div>
			<div className="md:ml-[14px]">
				<h1 className=" text-[#fff] md:text-[24px] text-[18px] font-bold ">{props.title}</h1>
				<p className=" text-[#fff] md:text-[14px] text-[12pxpx]  font-normal ">{props.text}</p>
			</div>
		</div>
	);
};

export default AddressItem;
