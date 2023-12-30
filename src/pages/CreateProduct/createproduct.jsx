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
// const { Option } = Select;

export const CreateProduct = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, error, success } = useSelector((state) => state.product);
	const [uploadURL, setUploadURL] = React.useState('');

	// const [files, setFiles] = React.useState([]);

	const getSignedURL = async (file, fileList) => {
		console.log('file to be upload', file);
		console.log('file list ', fileList);
		try {
			const url = await axiosConfig.post('/v1/product/image', {
				file: {
					name: file.name,
					size: file.size,
					type: file.type,
					uid: file.uid,
				},
			});
			if (url) {
				console.log('url', url);
				setUploadURL(() => {
					return url.data;
				});
			}
		} catch (error) {
			console.log('Error', error);
		}
		return new Promise((resolve) => { setTimeout(resolve, 1000); });
	};

	const onFinish = (values) => {
		// console.log('Success:', values);
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
			images: values.productImg.fileList.map((file) => file.name),
		};

		console.log('body', body);
		dispatch(createProduct(body));
		// console.log('Files', files);
	};

	if (error) {
		message.error('Error creating new Product');
	}

	if (success) {
		message.success('Product created successfully');
		navigate('/lab/products');
	}

	const onFinishFailed = (errorInfo) => {
		message.error(`Form validation error!${errorInfo}`);
		console.log('Failed:', errorInfo);
	};

	// React.useEffect(() => {

	// }, [uploadURL]);

	const upload = async (file) => {
		console.log('got url', uploadURL);
		try {
			const res = await axios.put(
				uploadURL,
				file,
				{
					headers: {
						'Content-Type': file.type,
					},
				},
			);
			console.log(res);
		} catch (error) {
			return error;
		}
		return 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188';
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
							name='contactUs'
							wrapperCol={{
								span: 22,
							}}
							style={{
								maxWidth: 600,
							}}
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete='off'
						>
							<Form.Item
								name='productImg'
								label='Product Image'
								className='w-full'
							>
								<Upload
									action={(file) => upload(file)}
									listType="picture"
									// defaultFileList={[...fileList]}
									className="picture-card"
									maxCount={3}
									accept='image/*'
									beforeUpload={(file, fileList) => getSignedURL(file, fileList)}
								>
									<Button icon={<UploadOutlined />}>Upload</Button>
								</Upload>
							</Form.Item>
							<Form.Item
								name='product_name'
								// label='Product Name'
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
								// label='Metal'
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
								// label='Features'
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
								// label='Specifications'
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
								// label='Material Composition'
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
										// label='Price'
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
									// label='MRP'
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
								// label='Expected Days'
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
								{/* <InputNumber
									placeholder='Expected Delivery Days'
									className=' border-1 border-black p-1 w-1/2'
									min={1}
									max={15}
									size={100}
								/> */}
								<Select
									placeholder='Expected Delivery Days'
									// style={{
									// 	borderColor: 'black',
									// 	bordersize: '1px',

									// }}
									bordered={true}
									className='border-1 border-black'
									// onChange={handleChange}
									options={[
										{ value: '2-5', label: '2-5 Days' },
										{ value: '4-8', label: '4-8 Days' },
										{ value: '9-12', label: '9-12 Days' },
										{ value: '13-17', label: '13-17 Days' },
									]}
								/>
							</Form.Item>
							<Form.Item
								wrapperCol={
									{
										// offset: 8,
										// span: 16,
									}
								}
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
