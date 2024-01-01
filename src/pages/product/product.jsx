import {
	Image, Card, Modal, Button, Spin
} from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyRupee } from '@mui/icons-material';
import { Navbar } from '../../components/navbar';
import { getProduct } from '../../store/products/productActions';

const Product = () => {
	const { productID } = useParams();
	const dispatch = useDispatch();
	const { loading, product } = useSelector((state) => state.product);
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	React.useEffect(() => {
		dispatch(
			getProduct({
				product: productID,
			})
		);
	}, [dispatch, productID]);

	console.log('product', product);

	if (loading || !product) {
		return (
			<div>
				<Navbar />
				<div className='bg-[#e8eaec] items-center flex justify-center p-20 my-20 align-middle border-2 container m-auto'>
					<Spin tip="Loading" size="large">
					</Spin>
				</div>
			</div>
		);
	}

	return (
		<div className=''>
			<Navbar />
			<div className='container m-auto'>
				<h1 className='my-2'> {product.lab?.lab?.name} </h1>
				<hr />
				<div className='flex'>
					<div className='w-1/2'>
						<Image.PreviewGroup
							items={product.images}
							className='w-44'
							movable={true}
							maskClassName='w-2/3 m-auto my-3 flex justify-center'
						>
							<Image
								src={product.images[0]}
								// className='w-52'
								rootClassName='w-2/3 m-auto my-3 flex justify-center shadow-md p-1 border-2 border-slate-400 bg-slate-300'
								// width={'full'}
								height={''}
							/>
						</Image.PreviewGroup>
					</div>
					<div className='w-1/2 my-3'>
						<div className='w-2/3 space-y-5'>
							<Card
								className='m-auto shadow-md'
								bodyStyle={{ padding: '1rem' }}
								hoverable={true}
							>
								<h4>{product.name}</h4>
								<h3>
									<span class="line-through text-gray-500">
										<CurrencyRupee className='p-0 text-gray-500 line-through'/>
										{product.mrp}
									</span>
									<CurrencyRupee className='p-0'/><span>{product.price}</span> </h3>
							</Card>
							<Card
								className='m-auto shadow-md'
								bodyStyle={{ padding: '1rem' }}
								hoverable={true}>
								<h4>Features</h4>
								<pre>
									<ul className='list-disc whitespace-normal px-4 m-1'>
										{product.details.features.split(',').map((feature, i) => {
											return <li key={i} className='text-md'> {feature.trim()} </li>;
										})}
										{/* <li className=''>Great marginal integrity </li>
										<li>Durable</li>
										<li>Does not fracture</li>
										<li>can be used in cases of long span bridges </li>
										<li>dentition</li>
										<li>Does not wear out the opposing natural</li>
										<li>Minimal plaque accumulation around the prosthesis</li> */}
									</ul>
								</pre>
							</Card>
							<Card
								className='m-auto shadow-md'
								bodyStyle={{ padding: '1rem' }}
								hoverable={true}>
								<h4>Specifications</h4>
								<pre>
									<ul className='list-disc px-4 m-1'>
										{product.details.specifications.split(',').map((spec, i) => {
											return <li key={i} className='text-md'>Posterior crowns </li>;
										})}
										{/* <li className=''>Posterior crowns </li>
										<li>bridges</li>
										<li>Does not fracture</li>
										<li>can be used in cases of long span bridges </li> */}
									</ul>
								</pre>
							</Card>
							<Card
								className='m-auto shadow-md'
								bodyStyle={{ padding: '1rem' }}
								hoverable={true}>
								<h4>Material Composition</h4>
								<pre>
									<ul className='list-disc px-4 m-1'>
										<li> material: { product.details?.metal || '-' }</li>
										<li className=''> {product.details.materialComposition} </li>
									</ul>
								</pre>
							</Card>

							<div className='flex space-x-4'>
								<button className='docButton'> Order </button>
								<Button className='docButton' onClick={showModal}> Fill Details </Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SpecificationModal open={open} setOpen={setOpen} />
		</div>
	);
};

const SpecificationModal = ({ open, setOpen }) => {
	const [loading, setLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');

	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setLoading(true);
		setTimeout(() => {
			setOpen(false);
			setLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setOpen(false);
	};

	return (
		<Modal
			title="Details"
			open={open}
			onOk={handleOk}
			confirmLoading={loading}
			onCancel={handleCancel}
			footer={[
				<Button key="back" onClick={handleCancel} className='docButton'>
            Return
				</Button>,
				<Button key="submit" loading={loading} onClick={handleOk} className='docButton'>
            Submit
				</Button>,
			]}
		>
			<p>{modalText}</p>
		</Modal>
	);
};

export { Product };
