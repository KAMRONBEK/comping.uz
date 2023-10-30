import React from 'react';

function Button({ text, onClick, className }: any) {
	return (
		<button
			onClick={onClick}
			className={`flex items-center justify-center text-[#343045] text-[12px] font-bold  cursor-pointer bg-transparent py-[17px] px-[50px] ${className}  rounded-[40px]  `}
			style={{
				background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
			}}
		>
			{text}
		</button>
	);
}

export default Button;
