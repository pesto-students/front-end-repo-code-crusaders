// import { useNavigate } from 'react-router';
import { LocationOn, CurrencyRupee } from '@mui/icons-material';
import {
	Card, Rate, Input
} from 'antd';
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
						title={lab.name}
					/>
					<div className='flex my-2 text-lg'>
						<LocationOn />
						<p> {lab.distance} KM, </p>
            &nbsp;
						<p> {lab.city} </p>
					</div>
					<div>
						<Rate
							allowHalf={true}
							defaultValue={lab.rating}
							disabled
							className=''
						/>
						<span> {parseFloat(lab.rating).toFixed(1)} </span>
					</div>
				</Card>
			</div>
		</>
	);
};

const ProductCard = ({ className, service }) => {
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
					<Meta title={service.title} />
					<div className='flex my-2 text-lg'>
						{service.description}
					</div>
					<div className='my-2 text-lg font-sans'>
						<CurrencyRupee /> <span> {service.price} </span>
					</div>
					<div>
						<Rate
							allowHalf={true}
							defaultValue={service.rating}
							disabled
							className=''
						/>
						<span> {parseFloat(service.rating).toFixed(1)} </span>
					</div>
				</Card>
			</div>
		</>
	);
};

const services = [
	{
		title: 'Precious (Silver)',
		description: 'Get precious Silver teeth cover',
		rating: 4.5,
		price: '2000',
	},
	{
		title: 'Precious (Silver)',
		description: 'Get precious Silver teeth cover',
		rating: 4.5,
		price: '2000',
	},
	{
		title: 'Precious (Silver)',
		description: 'Get precious Silver teeth cover',
		rating: 4.5,
		price: '2000',
	},
	{
		title: 'Precious (Silver)',
		description: 'Get precious Silver teeth cover',
		rating: 4.5,
		price: '2000',
	},
];

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Lab = () => {
	const lab = {
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	};

	const service = {
		title: 'Precious (Silver)',
		description: 'Get precious Silver teeth cover',
		rating: 4.5,
		price: '2000'
	};

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
				<hr class='h-px my-5 bg-gray-200 border-0 dark:bg-gray-700'></hr>
				<div className='flex flex-col'>
					{services && services.map((service, index) => {
						return <ProductCard service={service} key={index} className='my-2' />;
					})}
					<ProductCard service={service} />
				</div>
			</div>
		</div>
	);
};

export { Lab };
