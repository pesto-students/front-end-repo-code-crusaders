// import { useDispatch, useSelector } from 'react';
import React, { useState } from 'react';
import {
	Tabs, Select, Table, Checkbox, Button
} from 'antd';
import { Navbar } from '../../components/navbar';

export const LabOrder = () => {
	// const dispatch = useDispatch();
	// const { loading } = useSelector((state) => state.auth);
	const [activeKey, setActiveKey] = useState('tab1');
	const dropdownStyle = {
		marginRight: 10,
		width: 150, // Adjust width as needed
	};
	const actionColumnStyle = {
		width: 150,
		display: 'flex',
		justifyContent: 'space-around',
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

	const onCheckboxChange = (record, e) => {
		console.log('Record:', record);
		console.log('E: ', e);
	};

	const onAcceptClick = (key) => {
		console.log('Accepted Record: ', key);
	};

	const onRejectClick = (key) => {
		console.log('Rejected Record: ', key);
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
	const columns = [
		{
			title: '',
			dataIndex: 'isSelected',
			render: (record) => (
				<Checkbox onChange={(e) => onCheckboxChange(record.key, e.target.checked) }/>),
		},
		{
			title: 'Order ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Product Details',
			dataIndex: 'product_details',
			key: 'product_details',
		},
		{
			title: 'Order Date',
			dataIndex: 'order_date',
			key: 'order_date',
		},
		{
			title: 'Action',
			dataIndex: 'actions',
			key: 'actions',
			render: (record) => (
				<div style = {actionColumnStyle}>
					<Button size='small' onClick={() => onAcceptClick(record.key)}> Accept </Button>
					<Button size='small' onClick={() => onRejectClick(record.key)}> Reject </Button>
				</div>
			),
		},
	];
	const paginationOptions = {
		showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} items`,
		showQuickJumper: true, // Enables goto input
		showSizeChanger: true, // Enables page size dropdown per column
		pageSizeOptions: ['5', '10', '20'], // Custom page size options
		itemRender: (page, type, originalElement) => {
			if (type === 'prev') {
				return <Button type="ghost">Previous</Button>;
			}
			if (type === 'next') {
				return <Button type="ghost">Next</Button>;
			}
			return originalElement;
		}, // Customize page buttons
	};

	const dataSource = [
		{
			key: '1',
			id: 'O111',
			product_details: 'Metallic Cap P10',
			order_date: '12/11/10',
			status: 'Pending'
		},
		{
			key: '2',
			id: 'O222',
			product_details: 'Silver Cap P10',
			order_date: '13/11/10',
			status: 'Accepted'
		},
		{
			key: '3',
			id: 'O333',
			product_details: 'Frontal Denture',
			order_date: '24/11/10',
			status: 'Ready To Ship'
		}

	];
	return (
		<div>
			<Navbar />
			<div className='w-full flex flex-col'>
				<div className="flex w-full p-10 justify-center items-center gap-10" style = {{ backgroundColor: '#CCD6E5' }}>
					<h1 className='text-black text-xl font-bold leading-tight' style={{ fontFamily: 'Roboto' }}>Orders</h1>
				</div>
				<div className='flex flex-col items-center gap-4 container m-auto' >
					<div className=' flex flex-col justify-between items-start'>
						<Tabs className='flex items-end gap-8 bg-white bg-opacity-75' defaultActiveKey={activeKey} items={tabItems} onChange={handleChangeTab} />
					</div>
					<div className="flex gap-2 justify-between" style={{ marginTop: 10 }}>
						{/* <div className='flex-shrink-0 bg-gray-100 bg-opacity-60'> */}
						<div className='text-black text-base font-normal leading-relaxed'>
								Filter By :
						</div>
						{/* </div> */}
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
					<Table dataSource={dataSource} columns={columns} pagination = { paginationOptions } />
				</div>
			</div>
		</div>
	);
};
