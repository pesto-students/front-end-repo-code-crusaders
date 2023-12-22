import React from 'react';

import { Card } from 'antd';

const { Meta } = Card;

const ServiceCard = ({ service, className }) => {
	return (
		<Card
			className={`border-2 w-80 p-2 shadow-2xl ${className}`}
			cover={
				<img
					alt='example'
					src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
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
