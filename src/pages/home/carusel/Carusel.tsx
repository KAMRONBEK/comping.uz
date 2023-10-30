import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VictorIcon14 } from '../../../assets/icons/icons';
import HomeCaruselItem from '../../../components/homeCaruselItem/HomeCaruselItem';

import 'swiper/swiper-bundle.css';
import './style.css';
import Image1 from '../../../assets/images/image1.png';
const data = [
	{
		id: 0,
		title: 'SIMULATION',
		img: 'https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700',
		text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
	},
	{
		id: 1,
		title: 'SIMULATION',
		img: 'https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700',
		text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
	},
	{
		id: 2,
		title: 'SIMULATION',
		img: 'https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700',
		text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
	},
	{
		id: 3,
		title: 'SIMULATION',
		img: 'https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700',
		text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
	},
	{
		id: 4,
		title: 'SIMULATION',
		img: 'https://frankfurt.apollo.olxcdn.com/v1/files/72ngku0ic3gp1-UZ/image;s=1000x700',
		text: ` Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`,
	},
];
const Carusel = () => {
	return (
		<div className=" flex relative my-[102px] px-[80px] flex-col">
			<div className=" absolute left-0 right-0 ">
				<VictorIcon14 />
			</div>
			<>
				<Swiper
					slidesPerView={4}
					modules={[Pagination]}
					breakpoints={{
						320: {
							slidesPerView: 1, // 640 piksel genişlikte iki slayt görünür
						},
						640: {
							slidesPerView: 2, // 640 piksel genişlikte iki slayt görünür
						},
						1024: {
							slidesPerView: 3, // 640 piksel genişlikte iki slayt görünür
						},

						1440: {
							slidesPerView: 4, // 768 piksel genişlikte üç slayt görünür
						},
					}}
				>
					{data.map((item) => {
						return (
							<SwiperSlide key={item.id}>
								<HomeCaruselItem {...item} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</>
			<div
				className="h-[303px] w-full rounded-[160px] mt-[114px] flex-shrink-0"
				style={{
					background: `linear-gradient(0deg, rgba(48, 44, 66, 0.79) 0%, rgba(48, 44, 66, 0.79) 100%), url(${Image1}), lightgray 50% / cover no-repeat`,
				}}
			></div>
		</div>
	);
};

export default Carusel;
