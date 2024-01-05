import React from 'react';
import {
	Spin, Pagination, Card, Image, Steps
} from 'antd';
import { CurrencyRupee, CloseOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/navbar';
import { getOrders } from '../../store/order/orderAction';

const { Meta } = Card;

const Orders = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		orders, loading, error, pagination,
	} = useSelector((state) => state.order);
	const [page, setPage] = React.useState(1);
	const pageLimit = 20;

	const fetchOrders = React.useCallback(() => {
		dispatch(getOrders({
			page,
			limit: pageLimit,
		}));
	}, [dispatch, page]);

	React.useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);

	if (loading) {
		return (
			<div>
				<Navbar />
				<div className='bg-[#e8eaec] items-center flex justify-center p-20 my-20 align-middle border-2 container m-auto'>
					<Spin size="large">
					</Spin>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Navbar />
			<div className='container m-auto'>
				<div className='container m-auto my-2 w-3/4 flex justify-between align-middle'>
					<h2> Orders </h2>
					<CloseOutlined onClick={() => navigate(-1)} className='cursor-pointer' />
				</div>
				<hr className='w-3/4 container m-auto' />
				<div className='flex px-10 flex-wrap'>
					{error && 'No Content...'}
					{orders && orders.map((order, index) => <OrderCard key={index} order={order} index={index} className='my-2'/>)}
				</div>
				<Pagination
					defaultCurrent={1}
					total={pagination.totalResult}
					current={page}
					defaultPageSize={pageLimit}
					// responsive={true}
					onChange={(newPage) => setPage(newPage)}
					className='flex justify-center items-center my-5'
				/>
			</div>
		</div>
	);
};

const OrderCard = ({ order, className }) => {
	const { product } = order;

	const status = ['pending', 'accepted', 'readyToShip', 'outForDelivery', 'delivered'];
	let currentStatusIndex = 0;
	const timelineItems = status.map((state, index) => {
		const item = {
			title: state,
		};
		if (order.status === state) {
			currentStatusIndex = index;
		}
		return item;
	});

	return (
		<div
			className={`w-2/3 m-auto cursor-pointer ${className}`}
		>
			<Card
				className={'border-2 flex p-1 shadow-lg'}
				cover={
					<Image
						alt='example'
						src={product.images[0]}
						width={258}
						preview={false}
						className='w-400 rounded-b-md'
					/>
				}
			>
				<Meta title={product.name} />
				<div className='flex my-2 text-lg'>{product?.details?.features}</div>
				<div className='my-2 text-lg font-sans'>
					<CurrencyRupee /> <span> {product.price} </span>
				</div>
				<div className='my-2'>
					<Steps
						progressDot
						items={timelineItems}
						current={currentStatusIndex}
					/>
				</div>
				{/* <div>
					<Rate
						allowHalf={true}
						defaultValue={product.rating}
						className=''
					/>
					<span> {parseFloat(product.rating).toFixed(1)} </span>
				</div> */}
			</Card>
		</div>
	);
};

export { Orders };
