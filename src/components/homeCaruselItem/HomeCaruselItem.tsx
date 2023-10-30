import CaruselImage from '../../assets/images/carusel.png';
import Button from '../button/Button';

type itemType = {
	id?: number;
	title?: string;
	text?: string;
	img?: string;
};

const HomeCaruselItem = (item: itemType) => {
	return (
		<div
			className=" w-[310px]  rounded-[40px] h-[511px]  z-10 flex flex-col items-center "
			style={{ background: 'radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)' }}
		>
			<div className="w-full flex flex-col items-center pt-[23px] relative ">
				<div className=" bg-[#0E0E0E] rounded-[50%]  w-[210px] h-[210px] flex  justify-center  items-center">
					<img src={item.img} className="rounded-[50%] w-[190px] h-[190px]" />
				</div>
				<h2 className="  text-[#fff] text-[24px] font-bold uppercase mt-[21px] ">SIMULATION</h2>
				<div style={{ background: 'rgba(192, 183, 232, 0.33)' }} className="w-[150px] h-[1px] mt-[17px]"></div>
			</div>
			<div className="w-full flex flex-col items-center px-[25px]">
				<p className=" mt-[21px] mb-[35px] text-[12px] text-[#fff] font-normal">
					Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo
					laoreet sit amet vitae.
				</p>
				<Button text="TRY IT NOW" />
			</div>
		</div>
	);
};

export default HomeCaruselItem;
