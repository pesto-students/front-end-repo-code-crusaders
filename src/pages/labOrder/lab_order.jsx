// import { useDispatch, useSelector } from 'react';
import React, { useState, useEffect } from 'react';
import {
	Tabs, Select, Table, Checkbox, Button, Modal
} from 'antd';
import { Navbar } from '../../components/navbar';
import instance from '../../utils/axiosConfig';

export const LabOrder = () => {
	// const dispatch = useDispatch();
	// const { loading } = useSelector((state) => state.auth);
	const [activeKey, setActiveKey] = useState('Pending');
	const [dataSource, setDataSource] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleOrderClick = (order) => {
		setSelectedOrder(order);
		setIsModalOpen(true);
	};
	const dropdownStyle = {
		marginRight: 10,
		width: 150, // Adjust width as needed
	};
	const actionColumnStyle = {
		width: 150,
		display: 'flex',
		justifyContent: 'space-around',
	};
	const [selectedStatus, setSelectedStatus] = useState(); // For status dropdown
	const [selectedOrderDate, setSelectedOrderDate] = useState(null);

	const formatDate = (dateString) => {
		const options = {
			year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short'
		};
		const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
		return formattedDate;
	};

	const fetchData = async () => {
		try {
		// Make API request to fetch orders based on the selected status
			const response = await instance.get(`http://localhost:3001/v1/orders?status=${activeKey}`);
			const { data } = response;

			// Update the state with the fetched data
			setDataSource(data);
			console.log('Datasource: ', data);
		} catch (error) {
			console.error('Error fetching orders:', error);
		}
	};

	useEffect(() => {
		// Call fetchData when activeKey or selectedStatus changes
		fetchData();
	}, [activeKey, selectedStatus]); // Dependency array for useEffect

	useEffect(() => {
		// Initial API call for "Pending" status when component mounts
		if (activeKey === 'Pending' && dataSource.length === 0) {
			console.log('Initial API call');
			fetchData();
		}
	}, [activeKey, dataSource]); // For order date dropdown
	const handleChangeTab = async (key) => {
		setActiveKey(key);
		switch (activeKey) {
		case 'Pending': {
			// const response = await axiosConfig.get(`/v1/orders?status=${key}`);
			// const data = await response.json();
			// setDataSource(data);
			return console.log('Pending'); }
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

	const onChangeStatus = async (key, status) => {
		try {
			console.log('Key:', key.orderDetails.id);
			console.log('Action: ', status);
			const response = await instance.patch(`http://localhost:3001/v1/orders/${key.orderDetails.id}`, { status });
			fetchData();
			console.log(' Action response: ', response);
		} catch (error) {
			console.error('Error changing status:', error);
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
	const columns = [
		{
			title: '',
			dataIndex: 'isSelected',
			render: (record) => (
				<Checkbox onChange={(e) => onCheckboxChange(record.key, e.target.checked) }/>),
		},
		{
			title: 'Order ID',
			dataIndex: ['orderDetails', 'id'],
			key: 'id',
			render: (text, record) => (
				<span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleOrderClick(record)}>
					{text}
				</span>
			),
		},
		{
			title: 'Product Details',
			dataIndex: ['orderDetails', 'product', 'productName'],
			key: 'productName',
		},
		{
			title: 'Order Date',
			dataIndex: 'orderDetails.orderDate',
			key: 'order_date',
			render: (text, record) => formatDate(record.order_date),
		},
		{
			title: 'Action',
			dataIndex: 'actionButton',
			key: 'actions',
			render: (actionButtons, record) => (
				<div style={actionColumnStyle}>
					{actionButtons.map((action, index) => {
						return (
							<Button size='small' key={index} onClick={() => onChangeStatus(record, action)}>
								{action}
							</Button>
						);
					})}
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

	// const dataSource = [
	// 	{
	// 		key: '1',
	// 		id: 'O111',
	// 		product_details: 'Metallic Cap P10',
	// 		order_date: '12/11/10',
	// 		status: 'Pending'
	// 	},
	// 	{
	// 		key: '2',
	// 		id: 'O222',
	// 		product_details: 'Silver Cap P10',
	// 		order_date: '13/11/10',
	// 		status: 'Accepted'
	// 	},
	// 	{
	// 		key: '3',
	// 		id: 'O333',
	// 		product_details: 'Frontal Denture',
	// 		order_date: '24/11/10',
	// 		status: 'Ready To Ship'
	// 	}

	// ];
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
					{selectedOrder && (
						<Modal title={`Order ID: ${selectedOrder.orderDetails.id}`} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
							{/* Render order details inside the modal */}
							<div style={{ display: 'flex' }}>
								{/* Product Details Section */}
								<div style={{ flex: 1, marginRight: '20px' }}>
									<h2>Product Details</h2>
									<p>Product Name: {selectedOrder.orderDetails.product.productName}</p>
									<p>Metal: {selectedOrder.orderDetails.product.productDetails.metal}</p>
									<p>Features: {selectedOrder.orderDetails.product.productDetails.features}</p>
									<p>Specification:
										{selectedOrder.orderDetails.product.productDetails.specifications}</p>
									<p>Material Composition:
										{selectedOrder.orderDetails.product.productDetails.materialComposition}</p>
									{/* Add more product details as needed */}
								</div>

								{/* Order Details Section */}
								<div style={{ flex: 1 }}>
									<h2>Order Details</h2>
									<p>Order Date: {selectedOrder.orderDetails.orderDate}</p>
									<p>Status: {selectedOrder.orderDetails.status}</p>
									<p>Notes: {selectedOrder.orderDetails.notes}</p>
									{/* Add more order details as needed */}
								</div>
							</div>
						</Modal>
					)}
				</div>
			</div>
		</div>
	);
};
