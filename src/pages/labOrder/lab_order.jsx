// import { useDispatch, useSelector } from 'react';
import React, { useState } from 'react';
import { Tabs, Select } from 'antd';
import { Navbar } from '../../components/navbar';

export const LabOrder = () => {
	// const dispatch = useDispatch();
	// const { loading } = useSelector((state) => state.auth);
	const [activeKey, setActiveKey] = useState('tab1');
	const dropdownStyle = {
		marginRight: 10,
		width: 150, // Adjust width as needed
	};
	const [selectedStatus, setSelectedStatus] = useState(null); // For status dropdown
	const [selectedOrderDate, setSelectedOrderDate] = useState(null); // For order date dropdown

	const handleChangeTab = (key) => {
		setActiveKey(key);
		switch (activeKey) {
		case 'Pending':
			return console.log('Pending');
		case 'Accepted':
			return console.log('Pending');
		case 'Ready To Ship':
			return console.log('Pending');
		case 'Delivered':
			return console.log('Pending');
		default:
			return null;
		}
	};

	const statusOptions = [
		{ label: 'All', value: null }, // Option for all statuses
		{ label: 'Pending', value: 'pending' },
		{ label: 'Accepted', value: 'accepted' },
		// ... Add other status options
	];

	const orderDateOptions = [
		{ label: 'Today', value: '1' }, // Today's date
		{ label: 'This Week', value: '2' }, // Start of current week
		{ label: 'This Month', value: '3' }, // Start of current month
		// ... Add other date options
	];
	const tabItems = [
		{
			key: 'Pending',
			label: 'Pending',
		},
		{
			key: 'Accepted',
			label: 'Accepted',
		},
		{
			key: 'Ready To Ship',
			label: 'Ready To Ship',
		},
		{
			key: 'Delivered',
			label: 'Delivered',
		},
	];
	return (
		<div>
			<Navbar />
			<div className='w-full flex flex-col'>
				<div className="flex w-full p-10 justify-center items-center gap-10" style = {{ backgroundColor: '#CCD6E5' }}>
					<h1 className='text-black text-xl font-bold leading-tight' style={{ fontFamily: 'Roboto' }}>Orders</h1>
				</div>
				<div className='flex flex-col items-center gap-4'>
					<div className=' flex flex-col justify-between items-start'>
						<Tabs className='flex items-end gap-8 bg-white bg-opacity-75' defaultActiveKey={activeKey} items={tabItems} onChange={handleChangeTab} />
					</div>
					<div className="flex gap-2" style={{ marginTop: 10 }}>
						<div className='flex-shrink-0 bg-gray-100 bg-opacity-60'>
							<div className='text-black text-base font-normal leading-relaxed'>
								Filter By :
							</div>
						</div>
						<div style={dropdownStyle}>
							<Select
								placeholder="Select Status"
								allowClear
								value={selectedStatus}
								onChange={setSelectedStatus}
								options={statusOptions}
							/>
						</div>
						<div style={dropdownStyle}>
							<Select
								placeholder="Select Order Date"
								allowClear
								value={selectedOrderDate}
								onChange={setSelectedOrderDate}
								options={orderDateOptions}
							/>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};
