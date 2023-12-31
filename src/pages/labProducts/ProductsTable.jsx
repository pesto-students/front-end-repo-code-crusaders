import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button, Select, message, Table
} from 'antd';
import { updateProduct, getProducts } from '../../store/products/productActions';

export const ProductsTable = ({ tab }) => {
	const { products, success, error } = useSelector((state) => state.product);
	const [data, setData] = React.useState([]);
	const dispatch = useDispatch();
	const [page, setPage] = React.useState(1);

	const onStatusChange = (id, key) => {
		// const index = products.findIndex((product) => product.id === id);
		console.log('Status change ', id);
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

	console.log('proudct', products);

	React.useEffect(() => {
		console.log('success', success);
		if (success) {
			message.success('Product updated!');
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
		console.log('got product', products);

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
			render: (text, collection) => <Button
				onClick={() => console.log(text, collection)}
			> view Details </Button>,
		},
	];

	const pagination = {
		total: products.length,
		pageSize: 10, // Adjust the pageSize as per your requirements

		// showSizeChanger: true,
		// showQuickJumper: true,
		onChange: (newPage) => setPage(newPage),
	};

	return (
		<div>
			<Table
				columns={columns}
				dataSource={data}
				pagination={pagination} />
		</div>
	);
};
