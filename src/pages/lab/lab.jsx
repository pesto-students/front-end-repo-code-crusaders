// import { useNavigate } from 'react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationOn, CurrencyRupee } from '@mui/icons-material';
import {
	Card, Rate, Input, Pagination
} from 'antd';
import { getProducts } from '../../store/products/productActions';
import { Navbar } from '../../components/navbar';

const { Meta } = Card;
const { Search } = Input;

const LabHorizontalCard = ({ className, lab }) => {
	// const navigate = useNavigate();
	return (
		<>
			<div className='w-1/3'>
				<Card
					className={`border-2 flex p-2 shadow-2xl ${className}`}
					cover={
						<img
							alt='example'
							src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
						/>
					}
				>
					<Meta
						title={lab?.lab?.name}
					/>
					<div className='flex my-2 text-lg'>
						<LocationOn />
						<p> {lab?.distance} </p>
            &nbsp;
						<p> {lab?.address ? lab.address[0].city : 'surat'} </p>
					</div>
					<div>
						<Rate
							allowHalf={true}
							defaultValue={lab?.lab?.rating || '4'}
							disabled
							className=''
						/>
						<span> {parseFloat(lab?.lab?.rating || 4).toFixed(1)} </span>
					</div>
				</Card>
			</div>
		</>
	);
};

const ProductCard = ({ className, product }) => {
	return (
		<>
			<div className='w-2/3 m-auto'>
				<Card
					className={`border-2 flex p-1 shadow-lg ${className}`}
					cover={
						<img
							alt='example'
							src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
							className='h-full rounded-none'
						/>
					}
				>
					<Meta title={product.name} />
					<div className='flex my-2 text-lg'>
						{product?.details?.features}
					</div>
					<div className='my-2 text-lg font-sans'>
						<CurrencyRupee /> <span> {product.price} </span>
					</div>
					<div>
						<Rate
							allowHalf={true}
							defaultValue={product.rating}
							disabled
							className=''
						/>
						<span> {parseFloat(product.rating).toFixed(1)} </span>
					</div>
				</Card>
			</div>
		</>
	);
};

// const services = [
// 	{
// 		title: 'Precious (Silver)',
// 		description: 'Get precious Silver teeth cover',
// 		rating: 4.5,
// 		price: '2000',
// 	},
// 	{
// 		title: 'Precious (Silver)',
// 		description: 'Get precious Silver teeth cover',
// 		rating: 4.5,
// 		price: '2000',
// 	},
// 	{
// 		title: 'Precious (Silver)',
// 		description: 'Get precious Silver teeth cover',
// 		rating: 4.5,
// 		price: '2000',
// 	},
// 	{
// 		title: 'Precious (Silver)',
// 		description: 'Get precious Silver teeth cover',
// 		rating: 4.5,
// 		price: '2000',
// 	},
// ];

const Lab = () => {
	const dispatch = useDispatch();
	const { products, lab, pagination } = useSelector((state) => state.product);
	const [page, setPage] = React.useState(0);
	const [search, setSearch] = React.useState('');
	const pageLimit = 2;
	// const lab = {
	// 	name: 'Dentalline Laboratory',
	// 	city: 'surat',
	// 	distance: '1',
	// 	rating: 4.2,
	// };

	// const service = {
	// 	title: 'Precious (Silver)',
	// 	description: 'Get precious Silver teeth cover',
	// 	rating: 4.5,
	// 	price: '2000'
	// };
	console.log('total pages', pagination.totalResult);
	const onSearch = (value, _e, info) => setSearch(info?.source, value);

	React.useEffect(() => {
		dispatch(getProducts({
			lab: '658997951317adbabc1f611c',
			page,
			limit: pageLimit,
			search
		}));
	}, [page, dispatch, search]);

	React.useEffect(() => {
		console.log('product', products);
		if (products.length === 0) {
			dispatch(getProducts({ lab: '658997951317adbabc1f611c' }));
		}
	}, [dispatch, products]);

	return (
		<div>
			<Navbar />
			<div className='container m-auto'>
				<div className='flex justify-center my-5'>
					<LabHorizontalCard lab={lab} />
				</div>
				<Search
					placeholder='search service'
					allowClear
					enterButton={
						<button className='docButton !rounded-s-none'> Search </button>
					}
					size='large'
					onSearch={onSearch}
					className='w-1/2 mx-auto flex justify-center px-0 border-blue-200 border-2 rounded-lg border-e-0 '
				/>
				<hr className='h-px my-5 bg-gray-200 border-0 dark:bg-gray-700'></hr>
				<div className='flex flex-col'>
					{products && products.map((product) => {
						return <ProductCard product={product} key={product.id} className='my-2' />;
					})}
					{/* <ProductCard service={service} /> */}
				</div>
				<Pagination
					defaultCurrent={1}
					total={pagination.totalResult}
					current={page}
					defaultPageSize={pageLimit}
					// responsive={true}
					onChange={(newPage) => {
						console.log('page change', newPage);
						return setPage(newPage);
					}}
					className='flex justify-center items-center my-5'
				/>
			</div>

		</div>
	);
};

export { Lab };
