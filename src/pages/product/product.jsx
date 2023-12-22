// import { useNavigate } from "react-router";
import {
	Image, Card, Modal, Button
} from 'antd';
import { useState } from 'react';
import { CurrencyRupee } from '@mui/icons-material';
import { Navbar } from '../../components/navbar';

const Product = () => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');

	const showModal = () => {
		setOpen(true);
	};

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
		<div className=''>
			<Navbar />
			<div className='container m-auto'>
				<h1 className='my-2'> Vendor Name </h1>
				<hr />
				<div className='flex'>
					<div className='w-1/2'>
						<Image.PreviewGroup
							items={[
								'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
								'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
								'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
							]}
							className='w-44'
							movable={true}
							maskClassName='w-2/3 m-auto my-3 flex justify-center'
						>
							<Image
								src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
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
								<h4>{'Precious (Silver)'}</h4>
								<h3> <CurrencyRupee className='p-0'/><span> {'2000'} </span></h3>
							</Card>
							<Card
								className='m-auto shadow-md'
								bodyStyle={{ padding: '1rem' }}
								hoverable={true}>
								<h4>Features</h4>
								<pre>
									<ul className='list-disc px-4 m-1'>
										<li className=''>Great marginal integrity </li>
										<li>Durable</li>
										<li>Does not fracture</li>
										<li>can be used in cases of long span bridges </li>
										<li>dentition</li>
										<li>Does not wear out the opposing natural</li>
										<li>Minimal plaque accumulation around the prosthesis</li>
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
										<li className=''>Posterior crowns </li>
										<li>bridges</li>
										<li>Does not fracture</li>
										<li>can be used in cases of long span bridges </li>
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
										<li className=''>Silver alloys of varying compositions </li>
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
		</div>
	);
};

export { Product };
