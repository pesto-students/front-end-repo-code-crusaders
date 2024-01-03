import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Table, Button, Tooltip, message
} from 'antd';
import { getOrders, updatOrder } from '../../store/order/orderAction';
import { ProductDetailsModal } from './ProductDetailsModal';
import { resetSuccess } from '../../store/order/orderSlice';

export const OrdersTable = ({ status }) => {
	const dispatch = useDispatch();
	const {
		loading, orders, pagination, success, error
	} = useSelector(
		(state) => state.order
	);
	const [page, setPage] = useState(1);

	const [open, setOpen] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);

	const formatDate = (dateString) => {
		const options = {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		};
		const formattedDate = new Date(dateString).toLocaleDateString(
			'en-IN',
			options
		);
		return formattedDate;
	};

	const showOrderDetails = (order) => {
		setSelectedOrder(order);
		setOpen(true);
	};

	const fetchOrders = useCallback(() => {
		const query = {
			page,
			limit: 10,
			status,
		};
		dispatch(getOrders(query));
	}, [page, dispatch, status]);

	useEffect(() => {
		// Call fetchData when activeKey or selectedStatus changes
		fetchOrders();
	}, [fetchOrders]);

	useEffect(() => {
		if (success) {
			message.success('Order status updated sucessfully');
			setTimeout(() => resetSuccess(), 3000);
		} else if (error) {
			message.error('failed at updating order status');
			setTimeout(() => resetSuccess(), 3000);
		}
	}, [success, error]);
	const onStatusChange = async (order, action) => {
		const params = {
			orderId: order._id,
			status: action.status,
		};
		dispatch(updatOrder(params));
	};

	const columns = [
		{
			title: 'Order ID',
			dataIndex: '_id',
			key: 'orderId',
			render: (text, record) => (
				<span
					style={{ cursor: 'pointer', textDecoration: 'underline' }}
					onClick={() => showOrderDetails(record)}
				>
					{text}
				</span>
			),
		},
		{
			title: 'Product Details',
			dataIndex: ['product', 'name'],
			key: 'productName',
		},
		{
			title: 'Specifics',
			dataIndex: 'notes',
			key: 'specifics',
			render: (text) => (
				<Tooltip title={text} placement="topLeft">
					<div style={{
						maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
					}}>
						{text}
					</div>
				</Tooltip>
			),
		},
		{
			title: 'Order Date',
			dataIndex: 'orderDate',
			key: 'orderDate',
			render: (text) => formatDate(text),
		},
		{
			title: 'Action',
			dataIndex: 'actions',
			key: 'actions',
			align: 'center',
			render: (actions, record) => {
				console.log('what actions', actions);
				console.log('record we got', record);
				return (
					<div className='flex justify-center '>
						{actions && actions.length > 0 && actions.map((action, index) => (
							<Button size='small' className='mx-2' key={index} onClick={() => onStatusChange(record, action)}>
								{action.label}
							</Button>
						))}
					</div>
				);
			},
		},
	];

	const paginationOptions = {
		total: pagination.totalResult,
		itemRender: (page, type, originalElement) => {
			if (type === 'prev') {
				return <Button type='ghost'>Previous</Button>;
			}
			if (type === 'next') {
				return <Button type='ghost'>Next</Button>;
			}
			return originalElement;
		}, // Customize page buttons
		pageSize: 10,
		onChange: setPage,
	};

	return (
		<div>
			<Table
				dataSource={orders}
				columns={columns}
				pagination={paginationOptions}
			/>
			<ProductDetailsModal
				open={open}
				setOpen={setOpen}
				order={selectedOrder}
			/>
		</div>
	);
};
