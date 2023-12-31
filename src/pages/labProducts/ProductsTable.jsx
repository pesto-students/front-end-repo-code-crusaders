import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button, Select, message, Table
} from 'antd';
import { updateProduct, getProducts } from '../../store/products/productActions';
import { ProductDetailsModal } from './productDetailsModal';

export const ProductsTable = ({ tab }) => {
	const dispatch = useDispatch();
	const { products, success, error } = useSelector((state) => state.product);
	const [data, setData] = React.useState([]);
	const [page, setPage] = React.useState(1);
	const [open, setOpen] = React.useState(false);
	const [selectedProduct, setSelectedProduct] = React.useState(null);

	const onStatusChange = (id, key) => {
		const params = {
			id,
			active: !data[key].active,
		};
		setData((prev) => {
			prev[key].active = !prev[key].active;
			return prev;
		});
		// send status change request
		dispatch(updateProduct(params));
	};

	React.useEffect(() => {
		if (success) {
			message.success('Product updated!');
			// change success to false
		} else if (error) {
			message.error('Failed to update product.');
		}
	}, [success, error]);

	React.useEffect(() => {
		const params = {
			page,
			limit: 10,
			...(tab === 'Active' && { active: true }),
			...(tab === 'Inactive' && { active: false }),
		};
		dispatch(getProducts(params));
	}, [page, dispatch, tab]);

	const getData = React.useCallback(() => {
		setData(products.map((product, index) => ({ ...product, key: index })));
	}, [products]);

	React.useEffect(() => {
		getData();
	}, [getData]);

	const statusSelect = (bool, obj) => {
		return (
			<Select
				size='middle'
				style={{
					width: 120,
				}}
				options={[
					{
						key: '0', label: 'Active', value: true, disabled: bool === true
					},
					{
						key: '1', label: 'Inactive', value: false, disabled: bool === false
					},
				]}
				defaultValue={bool}
				// eslint-disable-next-line no-underscore-dangle
				onChange={() => onStatusChange(obj._id, obj.key)}
			>
			</Select>
		);
	};

	// show modal on click.
	// const openModel = (bool, obj) => {}

	const columns = [
		{ title: 'Name', dataIndex: 'name' },
		{
			title: 'price', dataIndex: 'price', align: 'right', render: (text) => <span> ₹ {text} </span>,
		},
		{
			title: 'Rating',
			dataIndex: 'rating',
			align: 'center',
			render: (text) => {
				let rate = text;
				if (!rate) {
					rate = (Math.random() * 3).toFixed(2) + 2;
				}
				return <span> {rate} </span>;
			}
		},
		{
			title: 'Status',
			dataIndex: 'active',
			key: 'active',
			align: 'center',
			render: statusSelect,
		},
		{
			title: 'Details',
			dataIndex: '_id',
			align: 'center',
			render: (_, collection) => <Button
				onClick={() => {
					setOpen(true);
					setSelectedProduct(collection);
				}}
			> view Details </Button>,
		},
	];

	const pagination = {
		total: products.length,
		pageSize: 10, // Adjust the pageSize as per your requirements

		itemRender: (page, type, originalElement) => {
			if (type === 'prev') {
				return <Button type='ghost'>Previous</Button>;
			}
			if (type === 'next') {
				return <Button type='ghost'>Next</Button>;
			}
			return originalElement;
		}, // Customize page buttons
		onChange: (newPage) => setPage(newPage),
	};

	return (
		<div>
			<Table
				columns={columns}
				dataSource={data}
				pagination={pagination} />
			<ProductDetailsModal
				open={open}
				setOpen={setOpen}
				product={selectedProduct}
			/>
		</div>
	);
};
