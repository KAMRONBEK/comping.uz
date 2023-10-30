import React from 'react';
export interface DefaultInputProps {
	autoFocus?: boolean;
	placeholder?: string;
	onChange?: any;
	value?: string;
	textType?: 'text' | 'number' | 'checkbox' | 'radio' | 'date' | 'password' | 'file';
	textarea?: boolean;
}

const DefaultInput = (props: DefaultInputProps) => {
	return (
		<>
			{props.textarea ? (
				<textarea
					placeholder={props.placeholder}
					onChange={props.onChange}
					value={props.value}
					autoFocus={props.autoFocus}
					className=" bg-transparent w-full h-[210px] rounded-[40px] border-[#fff] border-[2px] outline-none  px-[40px] text-[#fff] text-[14px] mx-[5px] mt-[39px] pt-[20px] "
				/>
			) : (
				<input
					type={props.textType}
					placeholder={props.placeholder}
					onChange={props.onChange}
					value={props.value}
					autoFocus={props.autoFocus}
					className=" bg-transparent w-full h-[72px] rounded-[40px] border-[#fff] border-[2px] outline-none  px-[40px] text-[#fff] text-[14px] mx-[5px] mt-[39px] "
				/>
			)}
		</>
	);
};

export default DefaultInput;
