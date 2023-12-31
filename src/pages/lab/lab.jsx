import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationOn, CurrencyRupee } from '@mui/icons-material';
import {
	Card, Rate, Input, Pagination, Image, Spin, Empty
} from 'antd';
import { useNavigate, useParams } from 'react-router';
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
					className={`border-2 flex p-2 shadow-md ${className}`}
					cover={
						<Image
							alt='example'
							src={lab.image}
							height={200}
							preview={false}
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
	const navigate = useNavigate();
	return (
		<>
			<div className='w-2/3 m-auto cursor-pointer' onClick={() => navigate(`/product/${product._id}`)}>
				<Card
					className={`border-2 flex p-1 shadow-lg ${className}`}
					cover={
						<Image
							alt='example'
							src={product.images[0]}
							width={250}
							preview={false}
							className='w-400 rounded-b-md'
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

const Lab = () => {
	const { labID } = useParams();
	const dispatch = useDispatch();
	const {
		products, lab, pagination, loading
	} = useSelector((state) => state.product);
	const [page, setPage] = React.useState(1);
	const [search, setSearch] = React.useState('');
	const pageLimit = 10;

	console.log('total pages', pagination.totalResult);
	const onSearch = (value, _e, info) => {
		console.log(value);
		setPage(0);
		setSearch(value);
	};

	const fetchProducts = React.useCallback(() => {
		const options = {
			lab: labID, page, limit: pageLimit
		};
		if (search) {
			options.search = search;
		}
		dispatch(getProducts(options));
	}, [dispatch, labID, page, search]);

	React.useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	if (loading && !lab) {
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
					{ (products && products.length > 0) ? products.map((product) => {
						return <ProductCard product={product} key={product._id} className='my-2'/>;
					})
						: <Empty
							image={Empty.PRESENTED_IMAGE_SIMPLE}
							description='No Active Products Found'
						/>
					}
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
