/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
// import { UploadButton } from '@uploadthing/react';
import { useDropzone } from '@uploadthing/react/hooks';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import {
	Button, Form, Input, Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
	// UploadButton,
	// UploadDropzone,
	useUploadThing,
	uploadRouter,
	uploadthingURL
} from '../../utils/uploadthing';
import { Navbar } from '../../components/navbar';
import axiosConfig from '../../utils/axiosConfig';
// const { Option } = Select;

const onFinish = (values) => {
	console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

export const CreateProduct = () => {
	// const { startUpload } = useUploadThing('productImage', {
	// 	onUploadError: (error) => {
	// 		console.error(error, error);
	// 		alert('Upload failed');
	// 	},
	// 	onClientUploadComplete: (data) => {
	// 		console.log('HERE Somewhre');
	// 		setFileList((pre) => {
	// 			return [...pre, data];
	// 		});
	// 		alert('Upload Completed');
	// 	},
	// });
	// const [fileList, setFileList] = React.useState([]);
	const [uploadURL, setUploadURL] = React.useState('');
	// setFileList([]);

	// const [files, setFiles] = React.useState([]);
	// const onDrop = React.useCallback((acceptedFiles) => {
	// 	setFiles(acceptedFiles);
	// }, []);

	// const { startUpload, permittedFileInfo } = useUploadThing(
	// 	'productImage',
	// 	{
	// 		onClientUploadComplete: () => {
	// 			alert('uploaded successfully!');
	// 		},
	// 		onUploadError: () => {
	// 			alert('error occurred while uploading');
	// 		},
	// 		onUploadBegin: () => {
	// 			alert('upload has begun');
	// 		},
	// 	},
	// );

	// const fileTypes = permittedFileInfo?.config
	// 	? Object.keys(permittedFileInfo?.config)
	// 	: [];

	// const { getRootProps, getInputProps } = useDropzone({
	// 	onDrop,
	// 	accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
	// });
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
						{/* <Upload
							action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
							listType="picture"
							defaultFileList={[...fileList]}
							className="upload-list-inline"
						> */}
						{/* <UploadButton
							props={uploadRouter}
							className='flex max-w-sm text-black'
							endpoint="productImage"
							onNewFileDropped={(file) => {
								console.log('new file added by user', file);
							}}
							onUploadError={(error) => {
								console.error(error, error);
								alert('Upload failed');
							}}
							onClientStartedUpload={(file) => {
								console.log('new file added by user', file);
							}}
							onClientFinishedUpload={(file) => {
								console.log(file);
							}}
							onBeforeUploadBegin={(files) => {
								// Preprocess files before uploading (e.g. rename them)
								return files.map(
									(f) => new File([f], `renamed-${f.name}`, { type: f.type }),
								);
							}}
							onUploadBegin={(name) => {
								// Do something once upload begins
								console.log('Uploading: ', name);
							}}
						/> */}
						{/* <input
							type="file"
							className="border-input bg-white placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
							onChange={async (e) => {
								const file = e.target.files?.[0];
								if (!file) return;
								console.log(file);

								// Do something with files

								// Then start the upload
								await startUpload([file]);
							}}
						/>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							<div>
								{files.length > 0 && (
									<button onClick={() => startUpload(files)}>
            Upload {files.length} files
									</button>
								)}
							</div>
							Drop files here!
						</div> */}
						{/* <Button icon={<UploadOutlined />}>Upload</Button> */}
						{/* </Upload> */}
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
								name='product-img'
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
									{/* <UploadButton {...uploadRouter}
										className='mx-auto flex max-w-sm items-center'
										endpoint="productImage"
										onNewFileDropped={(file) => {
											console.log('new file added by user', file);
										}}
										onUploadError={(error) => {
											console.error(error, error);
											alert('Upload failed');
										}}
										onClientStartedUpload={(file) => {
											console.log('new file added by user', file);
										}}
										onClientFinishedUpload={(file) => {
											console.log(file);
										}}
									/> */}
									{/* <input
										type="file"
										className="border-input bg-white placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
										onChange={async (e) => {
											const file = e.target.files?.[0];
											console.log('Hello');
											if (!file) return;
											console.log(file);

											// Do something with files

											// Then start the upload
											// await startUpload([file]);
										}}
									/> */}
									<Button icon={<UploadOutlined />}>Upload</Button>
								</Upload>
							</Form.Item>
							<Form.Item
								name='fullname'
								rules={[
									{
										required: true,
										message: 'Please input your full name!',
									},
								]}
							>
								<Input
									placeholder='Full Name'
									className='border-2 border-black rounded-full p-2'
								/>
							</Form.Item>

							<Form.Item
								name='phone'
								rules={[
									{
										required: true,
										message: 'Please input your phone number!',
									},
								]}
							>
								<Input
									// addonBefore={prefixSelector}
									placeholder='Phone No'
									// style={{ border: '2px solid black', borderRadius: '15px', padding: '2px' }}
									className='border-2 border-black rounded-full p-2'
								/>
							</Form.Item>

							<Form.Item
								name='email'
								rules={[
									{
										type: 'email',
										message: 'The input is not valid E-mail!',
									},
									{
										required: true,
										message: 'Please input your E-mail!',
									},
								]}
							>
								<Input
									placeholder='Email'
									className='border-2 border-black rounded-full p-2'
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
									className='bg-[#1A2F4E] h-10 p-auto px-10 text-white text-lg font-bold text-center align-middle rounded-full border-black-2 '
								>
                    Send Email
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
