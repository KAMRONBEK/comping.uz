import { AddressIcon, CallIcon, MessageIcon } from '../../../assets/icons/icons';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AddressItem from '../../../components/addressItem/AddressItem';
import Button from '../../../components/button/Button';
const data = [
	{
		id: 0,
		icon: <AddressIcon />,
		title: 'Pay Us a Visit',
		text: 'Union St, Seattle, WA 98101, United States',
		border: true,
	},
	{
		id: 1,
		icon: <CallIcon />,
		title: 'Give Us a Call',
		text: '(110) 1111-1010',
		border: true,
	},
	{
		id: 2,
		icon: <MessageIcon />,
		title: 'Send Us a Message',
		text: 'Contact@HydraVTech.com',
		border: true,
	},
	{
		id: 3,
		icon: <MessageIcon />,
		title: 'Send Us a Message',
		text: 'Contact@HydraVTech.com',
		border: false,
	},
];

const Address = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div
			style={{
				background: 'radial-gradient(2900.76% 50.13% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)',
				boxShadow: ' 0px 4px 4px 0px rgba(192, 183, 232, 0.01)',
				borderRadius: '90px',
				padding: '0 20px',
			}}
		>
			<Carousel
				responsive={responsive}
				className=" w-full flex justify-between items-center my-[80px] md:h-[167px] h-[189px] "
				swipeable={true}
				arrows={false}
				draggable={true}
			>
				{data.map((item) => {
					return <AddressItem key={item.id} {...item} />;
				})}
			</Carousel>
		</div>
	);
};

export default Address;
