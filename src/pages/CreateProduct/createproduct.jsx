import React from 'react';
import axios from 'axios';
import {
	Button, Form, Input, Upload, InputNumber, Tooltip, Select, message
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { UploadOutlined } from '@ant-design/icons';
import { createProduct } from '../../store/products/productActions';
import { Navbar } from '../../components/navbar';
import axiosConfig from '../../utils/axiosConfig';

const { TextArea } = Input;

export const CreateProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, error, successNewEntry } = useSelector((state) => state.product);

	const onFinish = (values) => {
		const body = {
			name: values.product_name,
			details: {
				metal: values.metal,
				features: values.features,
				specifications: values.specifications,
				materialComposition: values.material_composition,
			},
			price: values.price,
			mrp: values.mrp,
			expectedDays: values.expectedDays,
			// customFields:
			images: values.productImg.fileList.map((file) => file.response.newName),
		};

		dispatch(createProduct(body));
	};

	React.useEffect(() => {
		if (successNewEntry) {
			message.success('Product created successfully');
			navigate('/lab/products');
		} else if (error) {
			message.error('Error creating new Product');
		}
	}, [successNewEntry, error, navigate]);

	const onFinishFailed = (errorInfo) => {
		message.error(`Form validation error!${errorInfo}`);
		console.log('Failed:', errorInfo);
	};

	return (
		<div className='w-full'>
			<Navbar />
			<div className='w-full bg-[#e3e8ef]'>
				<div className='container m-auto py-3'>
					<h2> Add Product </h2>
				</div>
			</div>

			<div className='border-2 shadow-md rounded-2xl bg-[#e3e8ef] w-1/2 m-auto my-4'>
				<div className='flex flex-col px-10 py-5'>
					<h1 className='text-black my-5 text-left'>New Product</h1>
					<div className='mt-5'>
						<Form
							name='createProduct'
							wrapperCol={{
								span: 22,
							}}
							style={{
								maxWidth: 600,
							}}
							initialValues={{
								product_name: 'Dental Crown',
								metal: 'Ceramic',
								features: 'Great marginal integrity, Durable, Does not fracture, Can be used in cases of long span bridges, Does not wear out the opposing natural dentition, Minimal plaque accumulation around the prosthesis',
								specifications: 'Posterior crowns, Bridges, Implant crowns, Crowns under partials',
								material_composition: 'Ceramic Alloy',
								price: 2000,
								mrp: 2500,
								expectedDays: '13-17'
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete='on'
						>
							<Form.Item
								name='productImg'
								label='Product Image'
								className='w-full'
							>
								<Upload
									customRequest={customUpload}
									listType="picture"
									className="picture-card"
									maxCount={3}
									accept='image/*'
								>
									<Button icon={<UploadOutlined />}>Upload</Button>
								</Upload>
							</Form.Item>
							<Form.Item
								name='product_name'
								rules={[
									{
										required: true,
										message: 'Please input your Product Name!',
									},
								]}
							>
								<Input
									placeholder='Product Name'
									className=' border-1 border-black  p-1'
								/>
							</Form.Item>
							<Form.Item
								name='metal'
								rules={[
									{
										required: true,
										message: 'Please input product metal type!',
									},
								]}
							>
								<Input
									placeholder='Metal'
									className=' border-1 border-black  p-1'
								/>
							</Form.Item>
							<Form.Item
								name='features'
								rules={[
									{
										required: true,
										message: 'Please input product features!',
									},
								]}
							>
								<TextArea
									placeholder='Features'
									className=' border-1 border-black  p-1'
									showCount
									maxLength={500}
								/>
							</Form.Item>
							<Form.Item
								name='specifications'
								rules={[
									{
										required: true,
										message: 'Please input product Specifications!',
									},
								]}
							>
								<TextArea
									placeholder='Specification'
									className=' border-1 border-black  p-1'
									showCount
									maxLength={500}
								/>
							</Form.Item>
							<Form.Item
								name='material_composition'
								rules={[
									{
										required: true,
										message: 'Please input Material Composition!',
									},
								]}
							>
								<Input
									placeholder='Material Composition'
									className=' border-1 border-black  p-1'
								/>
							</Form.Item>

							<div className='flex flex-row w-full'>
								<Tooltip title='Selling Price mush be less then MRP.'>
									<Form.Item
										name='price'
										rules={[
											{
												required: true,
												message: 'Please input product Selling price!',
											},
										]}
									>
										<InputNumber
											type='number'
											placeholder='Selling Price'
											className=' border-1 border-black  p-1 w-full'
											prefix='₹'
											min={0}
											precision={2}
										/>
									</Form.Item>
								</Tooltip>
								<Form.Item
									name='mrp'
									rules={[
										{
											required: true,
											message: 'Please input Product MRP!',
										},
										{
											type: Number,
											message: 'MRP must be in Numbers',
										}
									]}
								>
									<InputNumber
										placeholder='MRP'
										className='border-1 border-black  p-1 w-full'
										prefix='₹'
										min={0}
										precision={2}
									/>
								</Form.Item>
							</div>

							<Form.Item
								name='expectedDays'
								rules={[
									{
										required: true,
										message: 'Please input expected product delivery days!',
									},
									{
										type: Number,
										message: 'Expected Days must be in numbers'
									}
								]}
							>
								<Select
									placeholder='Expected Delivery Days'
									bordered={true}
									className='border-1 border-black'
									options={[
										{ value: '2-5', label: '2-5 Days' },
										{ value: '4-8', label: '4-8 Days' },
										{ value: '9-12', label: '9-12 Days' },
										{ value: '13-17', label: '13-17 Days' },
									]}
								/>
							</Form.Item>
							<Form.Item
								className='text-left '
							>
								<Button
									type='primary'
									htmlType='submit'
									loading={loading}
									className='bg-[#1A2F4E] h-10 p-auto px-10 text-white text-lg font-bold text-center align-middle   border-black-2 '
								>
                    Submit
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

const getSignedURL = async (file) => {
	try {
		console.log('file to be upload', file);
		const url = await axiosConfig.post('/v1/product/image', {
			file: {
				name: file.name,
				size: file.size,
				type: file.type,
				uid: file.uid,
			},
		});
		console.log('url', url.data);
		return url.data;
	} catch (error) {
		console.log('Error', error);
		return new Error('Error getting new URL', error);
	}
};

const customUpload = async ({ file, onSuccess, onError }) => {
	try {
		const signedUrlResponse = await getSignedURL(file);
		const signedUrl = signedUrlResponse.signedURL;
		const newName = signedUrlResponse.file.name;
		const response = await axios.put(
			signedUrl,
			file,
			{
				headers: {
					'Content-Type': file.type,
				},
			},
		);

		if (response.status === 200) {
			// Handle success, e.g., update UI or trigger other actions
			console.log('Upload successful:', response);
			onSuccess({
				newName,
			});
		} else {
			// Handle failure, e.g., show an error message
			console.error('Upload failed:', response);
			onError(response);
		}
	} catch (error) {
		// Handle any unexpected errors
		console.error('Unexpected error during upload:', error);
		onError(error);
	}
};
