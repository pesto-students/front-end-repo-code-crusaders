import React, { useState } from 'react';
import {
	Tabs
} from 'antd';
import { Navbar } from '../../components/navbar';
import { OrdersTable } from './OrdersTable';

export const LabOrder = () => {
	const [tabStatus, setTabStatus] = useState('pending');

	const tabItems = [
		{
			key: 'pending',
			label: 'Pending',
		},
		{
			key: 'accepted',
			label: 'Accepted',
		},
		{
			key: 'readyToShip',
			label: 'Ready To Ship',
		},
		{
			key: 'delivered',
			label: 'Delivered',
		},
	];

	// ];
	return (
		<div>
			<Navbar />
			<div className='w-full flex flex-col'>
				<div className='w-full bg-[#e3e8ef]'>
					<div className='container m-auto py-3'>
						<h2> Orders </h2>
					</div>
				</div>
				<div className='container m-auto py-2'>
					<Tabs
						className='flex bg-white bg-opacity-75'
						defaultActiveKey={tabStatus}
						items={tabItems}
						onChange={setTabStatus}
					/>
					<OrdersTable status={tabStatus} />
				</div>
			</div>
		</div>
	);
};
