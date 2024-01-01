import React from 'react';
import { Card, Image } from 'antd';

import dentalCrown from '../../assets/doctor/dentalcrown.jpg';
import porcelainVeneers from '../../assets/doctor/PorcelainVeneersgurgaon.jpg';
import dentures from '../../assets/doctor/Horseshoe-Dentures.jpg';
import orthodonticAppliances from '../../assets/doctor/appliance.jpg';

const { Meta } = Card;

const serviceImage = {
	'Dental Crowns': dentalCrown,
	'Porcelain Veneers': porcelainVeneers,
	Dentures: dentures,
	'Orthodontic Appliances': orthodonticAppliances,
};

// import { } from '../../assets/doctor/Horseshoe-Dentures.jpg';
const ServiceCard = ({ service, className }) => {
	return (
		<Card
			className={`border-2 w-80 p-2 shadow-2xl flex flex-col justify-between ${className}`}
			cover={
				<Image
					alt={service.name}
					src={serviceImage[service.name]}
					preview={false}
					// height={250}
				/>
			}
			bodyStyle={{ padding: '5px' }}
		>
			<Meta
				// avatar={
				// 	<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
				// }
				title={service.name}
				className='p-2'
			/>
		</Card>
	);
};

export { ServiceCard };
