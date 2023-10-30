import React from 'react';
import { VictorIcon15 } from '../../../assets/icons/icons';
import BuildItem from '../../../components/buildItem/BuildItem';

const Build = () => {
	return (
		<div className="relative w-full  mb-[120px]  xl:px-[84px] xs:px-[24px] ">
			<div className=" lg:flex hidden absolute top-0 right-0 left-0">
				<VictorIcon15 />
			</div>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
				<BuildItem number={'01'} />
				<BuildItem number={'02'} />
				<BuildItem number={'03'} />
				<BuildItem number={'04'} />
			</div>
		</div>
	);
};

export default Build;
