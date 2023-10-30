import React from 'react';
import BrendImage from '../../../assets/images/Hydra-Tech3 1.png';
import Image1 from '../../../assets/images/image1.png';
import AboutItem from '../../../components/aboutItem/AboutItem';
const data = [
	{
		id: 0,
		img: BrendImage,
	},
	{
		id: 2,
		img: BrendImage,
	},
	{
		id: 3,
		img: BrendImage,
	},
];
const Brend = () => {
	return (
		<div className="w-full flex flex-col xl:px-[84px] xs:px-[24px] mb-[120px] ">
			<div className="w-full flex justify-between items-center">
				{data.map((item) => {
					return (
						<div className="w-[250px] h-[250px] " key={item.id}>
							<img src={item.img} className="w-[250px] h-[250px]  " />
						</div>
					);
				})}
			</div>
			<AboutItem
				title="HOW WE BUILD"
				title2="WITH HYDRA VR?"
				text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
			/>
		</div>
	);
};

export default Brend;
